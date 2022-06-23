import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from "../firebase.config";

import logo from '../assets/logo.png'

import './Navbar.css'

import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';

const Navbar = () => {
    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
        return total;
    };

    useEffect(() => {
        total();
    }, [total])

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const respone = await signInWithPopup(firebaseAuth, provider);
        console.log(respone);
    }

    const [click, setClick] = useState(false);
    const handleClick2 = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <>
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
                        <li className='nav-item'>
                            <Badge badgeContent={getdata.length} color="primary"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                            </Badge>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {
                                    getdata.length ?
                                        <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        getdata.map((e) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>
                                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                            </NavLink>
                                                                        </td>
                                                                        <td>
                                                                            <p>{e.rname}</p>
                                                                            <p>Price : ${e.price}</p>
                                                                            <p>Quantity : {e.qnty}</p>
                                                                            <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                                <i className='fas fa-trash smalltrash'></i>
                                                                            </p>
                                                                        </td>

                                                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                            <i className='fas fa-trash largetrash'></i>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <p className='text-center'>Total :$ {price}</p>
                                                </tbody>
                                            </Table>
                                        </div> :

                                        <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                            <i className='fas fa-close smallclose'
                                                onClick={handleClose}
                                                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                            <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                            <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                                        </div>
                                }
                            </Menu>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;