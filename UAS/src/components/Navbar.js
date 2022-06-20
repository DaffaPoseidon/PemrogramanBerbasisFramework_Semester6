import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from "../firebase.config";

import logo from '../assets/logo.png'

import './Navbar.css'

const Navbar = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const respone = await signInWithPopup(firebaseAuth, provider);
        console.log(respone);
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#card' onClick={closeMenu}>Product</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact Us</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={login} className='cursor-pointer'>Login </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;