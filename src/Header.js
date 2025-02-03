// Header.js
import React from 'react';
import logo from './img/logo.svg';
import Nav from './Nav';
import './Header.css'; // Ensure this CSS file is included

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Little Lemon Logo" className="logo" />
            </div>
            <Nav />
        </header>
    );
}

export default Header;
