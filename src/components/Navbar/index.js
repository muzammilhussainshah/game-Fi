import React, { useState } from 'react';
import './index.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Career from '../../pages/Careers';
import Product from '../../pages/Products'
import Contact from '../../pages/Contact';
import Team from '../../pages/Team';
import Blog from '../../pages/Blog';
import { BiPhoneCall } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({signOutUser}) => {
    return (
        <>
            <div className="main-header">
                <Link to="/">
                    <div className="nav-logo">
                        <img className='header_logo' src={`/assets/logo.png`} />
                    </div>
                </Link>
                <ul className="nav-items">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link> </li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/team">TEAM</Link></li>
                    <li><Link to="/career">CAREERS</Link></li>
                    <li><Link to="/blog">BLOGS</Link></li>
                    <li ><Link to="/contact">CONTACT</Link> </li>
                </ul>
            </div>

        </>
    )
}
export default Navbar;
