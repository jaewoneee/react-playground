import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/images/logos.png';
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
                        state.isDarkMode === false
                        ? <button onClick={() => { dispatch({ type: 'true' });}} title='dark'></button>
                        : <button onClick={() => { dispatch({ type: 'false' });}} title='light'></button>
                    }
                    
                </div>
            </header>
        </div>
    )
}

export default Header;