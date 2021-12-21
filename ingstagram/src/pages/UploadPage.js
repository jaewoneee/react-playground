import defaultThumb from '../assets/images/upload.png';
    
function Upload() {

    return (
        <form>
            <div className="upload-wrap">
                <div className="image-box">
                    <div className="upload-img-btn">
                         <label htmlFor="upload"></label> 
                         <input type="file" id="upload" accept="image/*" onChange={(e) => { setThumbnail(e);}}></input>
                     </div>
                    <img src={defaultThumb} className="uploaded-img" alt="이미지"></img>
                </div>
                <div className="upload-text-box">
                    <textarea placeholder="Write a caption..."></textarea>
                </div>
               <button type="submit">Share</button>
            </div>
        </form>
    )
}

function setThumbnail(event) {
    const reader = new FileReader();
    const img = document.querySelector(".uploaded-img");
    const fileExtension = {
        name: event.target.files[0].name,
        size:event.target.files[0].size
    };
    
    if (checkFileExtension(fileExtension)) {
        reader.onload = e => {
        img.setAttribute("src", e.target.result);
     };
    reader.readAsDataURL(event.target.files[0]);
    } else {
        alert('Upload failed!');
    }
    
}

// 유효한 파일인지 체크
function checkFileExtension(file) {
    const regex = new RegExp("(.*?)\.(jpg|jpeg|png|bmp|gif)$"); // 이미지 파일만 허용
    const maxSize = 5242880; //5MB 이하
    
    if (!regex.test(file.name) || file.size >= maxSize) {
        return false;
    } else {
        return true;
    }

}

export default Upload;