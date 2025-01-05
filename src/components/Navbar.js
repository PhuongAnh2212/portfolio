import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div className="nav-container">
        <h1 className="nav-title">phuonganh's memoir</h1>
        <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">The Forge</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
);

export default Navbar;
