import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/images/logo.png';
// import whiteLogo from '../../assets/images/logo_wht';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    let state = useSelector((state) => state );
    let dispatch = useDispatch();

    return (
        <div className="header-wrap">
            <header>
                <div className="header-inner">
                    <h1 id="logo">
                        <Link to="/">
                            <img src={defaultLogo} alt='로고이미지'></img>
                        </Link>
                    </h1>
                    {
                        state.reducer === false
                        ? <button onClick={() => { dispatch({ type: 'true' });}}>Dark</button>
                        : <button onClick={() => { dispatch({ type: 'false' });}}>Light</button>
                    }
                    
                </div>
            </header>
        </div>
    )
}

export default Header;