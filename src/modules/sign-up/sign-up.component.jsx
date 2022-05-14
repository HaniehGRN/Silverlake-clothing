import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {MdEmail, MdOutlinePassword } from "react-icons/md";
import {GiConfirmed} from "react-icons/gi";

import FormInput from "../../shared/components/form-input/form-input.component";

import "./sign-up.styles.scss";

const SignUp = () => {

    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className="sign-up">
            <FormInput
                name="name"
                type="text"
                value={email}
                label="Name"
                handleChange={handleChange}
                required
            >
                <AiOutlineUser />
            </FormInput>
            <FormInput
                name="email"
                type="email"
                value={email}
                label="Email"
                handleChange={handleChange}
                required
            >
                <MdEmail />
            </FormInput>
            <FormInput
                name="password"
                type="password"
                value={email}
                label="Password"
                handleChange={handleChange}
                required
            >
                <MdOutlinePassword />
            </FormInput>
            <FormInput
                name="confirmPassword"
                type="password"
                value={email}
                label="Ponfirm Password"
                handleChange={handleChange}
                required
            >
                < GiConfirmed/>
            </FormInput>
        </div>
    )
}

export default SignUp;