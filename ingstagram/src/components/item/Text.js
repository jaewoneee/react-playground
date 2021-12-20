function Text() {
    return (
        <div className="text-box">
            <p><span>learningreact</span>헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며,
                대통령은 즉시 이를 공포하여야 한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이
                아닌 한 국회의 요구가 있으면 회기중 석방된다.</p>
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