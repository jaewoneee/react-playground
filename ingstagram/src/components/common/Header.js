import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/images/logo.png';
// import whiteLogo from '../../assets/images/logo_wht';

function Header() {
    return (
        <div className="header-wrap">
            <header>
                <div className="header-inner">
                    <h1 id="logo">
                        <Link path="/">
                            <img src={defaultLogo} alt='로고이미지'></img>
                        </Link>
                    </h1>
                    <button onClick={()=>{}}></button>
                </div>
            </header>
        </div>
    )
}

export default Header;