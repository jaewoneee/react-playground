import defaultThumb from '../assets/images/upload.png';
import axios from 'axios';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';

function Upload() {
    let history = useHistory();
    let [file, setFile] = useState('');
    let [text, setText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('text', text);
        axios.post('http://localhost:8000/posts', formData, {
            header: {
                'content-type': 'multipart/form-data'
            },
        }).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err);
        })
        alert('Upload Success!');
        history.push('/');
    }

    return (
        <div className="upload-wrap">
            <form enctype="multipart/form-data" method="post" onSubmit={submitHandler}>
                <div className="image-box">
                    <div className="upload-img-btn">
                         <label htmlFor="upload"></label> 
                        <input type="file" id="upload" name='image' accept="image/*" onChange={(e) => { setThumbnail(e); setFile(e.target.files[0]) }}></input>
                     </div>
                    <img src={defaultThumb} className="uploaded-img" alt="이미지"></img>
                </div>
                <div className="upload-text-box">
                    <textarea type="text" name="text" placeholder="Write a caption..." onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>
                <button type="submit" disabled={file ==='' || text === ''}>Share</button>
             </form>
         </div>

    )
}

// 업로드한 이미지 미리보기
function setThumbnail(event) {
    const reader = new FileReader();
    const img = document.querySelector(".uploaded-img");
    const fileExtension = {
        name: event.target.files[0].name,
        size: event.target.files[0].size
    };
   
    if (checkFileExtension(fileExtension)) {
        reader.onload = e => {
            img.setAttribute("src", e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    } else {
        alert('Upload failed! \nOnly image file can be uploaded. (Maximum file size : 5MB)');
    }
    
}

// 업로드 한 파일의 유효성 체크
function checkFileExtension(file) {
    const regex = new RegExp("(.*?)\.(jpg|jpeg|png|bmp|gif)$"); // 확장자 제한: 이미지 파일만 허용
    const maxSize = 5242880; //용량제한: 5MB 이하
    
    if (!regex.test(file.name) || file.size >= maxSize) {
        return false;
    }  else {
        return true;
    }
}



export default Upload;