function Text(props) {
    return (
        <div className="text-box">
            <div>
                <span class="nickname">learningreact</span>
                <span>{props.propsdata.text}</span>
            </div>
            <button className="more-btn" onClick={(e)=>{moreText(e)}}>more</button>
        </div>
    )
}
function moreText(e) {
    let target = e.target;
    target.previousSibling.classList.add('show');
    target.style.display = 'none';
}


export default Text;