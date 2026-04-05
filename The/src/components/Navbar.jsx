import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from './ThemeContext';
import './Navbar.css';

function Navbar(){
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="dribbble-navbar">
            <a className="navbar-brand" href="#">Transaction Monitor</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Revenue</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <div className="navbar-right">
                <FaUser className="user-icon" />
                <div className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar

export default Navbar