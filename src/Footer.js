// Footer.js
import React from 'react';
import logo from './img/logo2.svg';
import './Footer.css'; // Ensure this CSS file is included

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <img src={logo} alt="Little Lemon Logo" className="footer-logo-img" />
                </div>
                <div className="footer-column">
                    <h4>Doormat Navigation</h4>
                    <ul className="footer-list">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul className="footer-list">
                        <li>Address: 123 Main St, Chicago, IL</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: info@littlelemon.com</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Social Media</h4>
                    <ul className="footer-social-list">
                        <li><a href="https://www.facebook.com"><img src="/img/facebook.png" alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com"><img src="/img/instagram.png" alt="Instagram" /></a></li>
                        <li><a href="https://www.twitter.com"><img src="/img/twitter.png" alt="Twitter" /></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-text">
                <p>&copy; 2025 Little Lemon. All rights reserved.</p>

                </div>
        </footer>
    );
}

export default Footer;
