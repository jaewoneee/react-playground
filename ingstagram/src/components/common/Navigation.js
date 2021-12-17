import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav-wrap">
            <nav id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                    <li><Link to="/mypage">Mypage</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;