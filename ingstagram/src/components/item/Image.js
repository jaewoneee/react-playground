
function Image(props) {
    return (
        <div className="image-box">
            <img src={`http://localhost:8000/${props.propsdata.image}`} alt='이미지'></img>
        </div>
    )
}

export default Image;