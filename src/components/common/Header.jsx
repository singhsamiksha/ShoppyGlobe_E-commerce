import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Header.css';

function Header() {
    return(
        <div className='header'>
            <div className="logo">
                <img
                    src="https://brandlogos.net/wp-content/uploads/2022/08/shop_pay-logo_brandlogos.net_tyf5p-512x512.png"
                    width="130px"
                    height="130px"
                    alt="Logo"
                />
            </div>
            <div className='navbar'>
                <Link to="/" className="nav-link">
                    <i className="fa fa-home"></i> Home
                </Link>
                <Link to="/products" className="nav-link">
                    <i className="fa fa-cogs"></i> Products
                </Link>
                <Link to="/cart" className="nav-link">
                    <i className="fa fa-shopping-cart"></i> Cart
                </Link>
            </div>
        </div>
    );
}

export default Header;