import { useState } from "react";
import { useDispatch } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

import FormInput from "../../shared/components/form-input/form-input.component";
import CustomButton from "../../shared/components/custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { setAuthMode } from "../../config/redux/features/auth/authSlice";

const SignUp = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [signUpHoverState, setSignUpHoverState] = useState(true);
    const [infoHoverState, setInfoHoverState] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleMouseEnterSignUp = (e) => {
        e.preventDefault();
        setSignUpHoverState(true);
    }

    const handleMouseEnterInfo = () => {
        setInfoHoverState(true);
        setSignUpHoverState(false);
    }

    const handleMouseLeaveInfo = () => {
        setInfoHoverState(false);
        setSignUpHoverState(true);
    }

    return (
        <div className="sign-up">
            <div
                className={`info-part ${infoHoverState === true ? "highlighted" : ""}`}
                onMouseEnter={handleMouseEnterInfo}
                onMouseLeave={handleMouseLeaveInfo}
            >
                <h1>Sign up for free</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                    dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                    dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.
                </p>
                <CustomButton>I Already have an account</CustomButton>
            </div>
            <div
                className={`auth-part ${signUpHoverState === true ? "highlighted" : ""}`}
                onMouseEnter={handleMouseEnterSignUp}
            >
                <form>
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
                        label="Confirm Password"
                        handleChange={handleChange}
                        required
                    >
                        < GiConfirmed />
                    </FormInput>
                    <CustomButton>CREATE MY ACCOUNT</CustomButton>
                </form>
            </div>
        </div>
    )
}

export default SignUp;