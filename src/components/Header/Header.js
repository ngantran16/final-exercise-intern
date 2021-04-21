import React from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaUserCircle, FaCartPlus, FaStar, FaBell } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

import Images from '../../themes/Images';
import './Header.scss';

const Header = () => {
    const response = useSelector((state) => state.register.response);
    return (
        <header className="header">
            <div className="logo">
                <img src={Images.uberIcon} alt="uber-icon" className="uber-icon" />
                <div> Uberbd </div>
            </div>
            <div>
                <div className="dropdown">
                { 
                    response ? (
                        <div className="account-user">
                            <p>Ngan Tran</p>
                            <img src={ Images.menuIcon } alt="menu-icon" className="menu-icon" />
                        </div>
                        
                    ): 
                    <img src={ Images.menuIcon } alt="menu-icon" className="menu-icon" />
                }
                   
                    <div className="dropdown-content">
                        <a href="/"><FaHome color="#888888" /><span>Home</span></a>
                        <a href="/"><FaUserCircle color="#888888" /><span>Profile</span></a>
                        <a href="/booking"><FaCartPlus color="#888888" /><span>Your Book</span></a>
                        <a href="/search"><FaStar color="#888888" /><span>Search</span></a>
                        <a href="/contact"><FaBell color="#888888" /><span>Contact</span></a>
                        <a href="/uber-work"><MdSettings color="#888888" /><span>Uber work</span></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;