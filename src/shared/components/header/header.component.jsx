import React, { useState } from "react";
import { SiBigcartel } from "react-icons/si";
import { HiMail, HiShoppingCart, HiLogin, HiLogout, HiSearch } from "react-icons/hi";


import "./header.styles.scss";

const Header = () => {
    const [email, setEmail] = useState('');
    const handleChange = (event) => {
        setEmail(event.target.value);
    }
    return (
        <div className="header-container">
            <div className="logo-container">
                <div className="logo">
                    <SiBigcartel />
                    <span>Silverlake</span>
                </div>
            </div>
            <div className="options-container">
                <div className="icon">
                    <HiSearch />
                </div>
                {/* <div>
                    <HiLogout />
                </div> */}
                <div className="icon">
                    <HiMail />
                </div>
                <div className="icon">
                    <HiShoppingCart />
                </div>
                <div className="icon">
                    <HiLogin />
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