import { useState } from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, children, ...otherProps }) => {
    return (
        <div className="form-input-container">
            {label ?
                (<label className="form-input-label">{label}</label>)
                : null}
            <div className="form-input-group">
                <div className="icon">
                    {children}
                </div>
                <input
                    className={`${otherProps.value.length ? "hide-guidline" : ""} form-input`}
                    {...otherProps}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default FormInput;


/**
 * MdOutlinePassword
 * GiConfirmed
 * RiUser2Fill
 * MdEmail
 */