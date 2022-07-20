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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({signOutUser}) => {
    const { pathname } = useLocation();

    return (
        <>
            <div className="main-header">
                <Link to="/">
                    <div className="nav-logo">
                        <img className='header_logo' src={`/assets/logo.png`} />
                    </div>
                </Link>
                <ul className="nav-items">
                    <li><Link to="/" className={pathname === '/' ? 'active' : ''}>HOME</Link></li>
                    <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>ABOUT</Link> </li>
                    <li><Link to="/products" className={pathname === '/products' ? 'active' : ''}>PRODUCTS</Link></li>
                    <li><Link to="/team" className={pathname === '/team' ? 'active' : ''}>TEAM</Link></li>
                    <li><Link to="/career" className={pathname === '/career' ? 'active' : ''}>CAREERS</Link></li>
                    <li><Link to="/blog" className={pathname === '/blog' ? 'active' : ''}>BLOGS</Link></li>
                    <li ><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>CONTACT</Link> </li>
                </ul>
            </div>

        </>
    )
}
export default Navbar;
