import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To my React Website</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;