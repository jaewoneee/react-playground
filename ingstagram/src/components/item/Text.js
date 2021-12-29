function Text(props) {
    return (
        <div className="text-box">
            <div>
                <span className="nickname">learningreact</span>
               {props.propsdata.text}
            </div>
            {
                props.propsdata.text.length > 65
                ?<button className="more-btn" onClick={(e)=>{moreText(e)}}>more</button>
                : null
            }
            
        </div>
    )
}



function moreText(e) {
    let target = e.target;
    target.previousSibling.classList.add('show');
    target.style.display = 'none';
}


export default Text;