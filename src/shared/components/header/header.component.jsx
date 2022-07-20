import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SiBigcartel } from "react-icons/si";
import { HiShoppingCart, HiLogin, HiLogout, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../../config/redux/features/user/userSlice";

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
                <Link className="icon" to="/checkout">
                    <HiShoppingCart />
                </Link>
                {
                    currentUser ?
                        <Link className="icon" to="/">
                            <HiLogout onClick={() => dispatch(setCurrentUser(null))} />
                        </Link>
                        : <Link className="icon" to="/auth">
                            <HiLogin />
                        </Link>
                }

            </div>
        </div>
    )
}

export default Header;