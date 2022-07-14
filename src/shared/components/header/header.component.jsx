import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SiBigcartel } from "react-icons/si";
import { HiMail, HiShoppingCart, HiLogin, HiLogout, HiSearch } from "react-icons/hi";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../../config/redux/features/user/userSlice";

import Modal from "../../../modules/auth/auth.component";

import "./header.styles.scss";

const Header = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.user.currentUser);

    return (
        <div className="header-container">
            <div className="logo-container">
                <Link className="logo" to="/">
                    <SiBigcartel />
                    <span>Silverlake</span>
                </Link>
            </div>
            <div className="options-container">
                <Link className="icon" to="/search">
                    <HiSearch />
                </Link>
                {/* <div>
                    <HiLogout />
                </div> */}
                <Link className="icon" to="/checkout">
                    <HiShoppingCart />
                </Link>
                <Link className="icon" to="/auth">
                    {
                        currentUser ? <HiLogout onClick={() => dispatch(setCurrentUser(null))} /> : <HiLogin />
                    }
                </Link>
            </div>
        </div>
    )
}
// HiLogout
// HiLogin
// HiShoppingCart
// HiSearch

export default Header;