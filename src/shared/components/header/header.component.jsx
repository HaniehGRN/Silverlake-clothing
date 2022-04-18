import React from "react";
import { Link } from "react-router-dom";
import { SiBigcartel } from "react-icons/si";

import CartIcon from "../cart-icon/cart-icon.component";
import LoginIcon from "../login-icon/login-icon.component";
import LogoutIcon from "../logout-icon/logout-icon.component";
import SearchIcon from "../search-icon/search-icon.component";

import "./header.styles.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <SiBigcartel />
            </div>
            <div className="options-container">
                <div>
                    <CartIcon />
                </div>
                <div>
                    <LoginIcon />
                </div>
                <div>
                    <LogoutIcon />
                </div>
                <div>
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
// HiLogout
// HiLogin
// HiShoppingCart
// HiSearch

export default Header;