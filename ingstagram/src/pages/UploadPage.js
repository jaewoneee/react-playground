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
    reader.onload = e => {
        let img = document.querySelector(".uploaded-img");
        img.setAttribute("src", e.target.result);
        
    };
    reader.readAsDataURL(event.target.files[0]);
}



export default Upload;