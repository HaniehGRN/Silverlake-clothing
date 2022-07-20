import { useState } from "react";
import { useDispatch } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

import FormInput from "../../shared/components/form-input/form-input.component";
import CustomButton from "../../shared/components/custom-button/custom-button.component";

import { setAuthMode } from "../../config/redux/features/auth/authSlice";
import { setCurrentUser } from "../../config/redux/features/user/userSlice";
import { SignUpToFirestore, SignUpUp } from "../../config/firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {

    const dispatch = useDispatch();

    const [userCredentials, setUserCredentials] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );

    const { displayName, email, password, confirmPassword } = userCredentials;
    const [signUpHoverState, setSignUpHoverState] = useState(true);
    const [infoHoverState, setInfoHoverState] = useState(false);

    const passwordValidation = () => {
        if (password != confirmPassword) {
            setUserCredentials({ ...userCredentials, confirmPassword: '', password: '' })
            // passwords does not match
            alert("Passwords does not match !");
            return false
        }
        return true
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
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
    
    const handleClick = () => {
        dispatch(setAuthMode("sign-in"));
    }


    const handleSignUp = () => {
        if (email != '' && password != '' && displayName != '' && confirmPassword != '') {
            if (passwordValidation()) {
                const user = SignUpToFirestore(email, password, displayName);
                console.log(user)
                const userEmail = user.email;
                const userDisplayName = user.displayName;
                const userId = user.uid;
                dispatch(setCurrentUser({ userId, userDisplayName, userEmail }));
            }
        }
        handleClick();
        setUserCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <div className="sign-container">
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
                <CustomButton onclick={handleClick}>I Already have an account</CustomButton>
            </div>
            <form
                className={`auth-part ${signUpHoverState === true ? "highlighted" : ""}`}
                onMouseEnter={handleMouseEnterSignUp}
            >
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
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
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                >
                    <MdOutlinePassword />
                </FormInput>
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    label="Confirm Password"
                    handleChange={handleChange}
                    required
                >
                    < GiConfirmed />
                </FormInput>
                <CustomButton onclick={handleSignUp}>CREATE MY ACCOUNT</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;