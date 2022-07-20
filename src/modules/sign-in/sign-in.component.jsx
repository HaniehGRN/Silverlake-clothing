import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import FormInput from "../../shared/components/form-input/form-input.component";
import CustomButton from "../../shared/components/custom-button/custom-button.component";
import { setAuthMode } from "../../config/redux/features/auth/authSlice";
import { setCurrentUser } from "../../config/redux/features/user/userSlice";
import { SignInToFirestore, GoogleSignInToFirestore } from "../../config/firebase/firebase.utils";

import "../sign-up/sign-up.styles.scss";
import "./sign-in.styles.scss";

const SignIn = () => {

          const dispatch = useDispatch();

          const [userCredentials, setUserCredentials] = useState(
                    {
                              email: '',
                              password: ''
                    }
          );

          const [signInHoverState, setSignInHoverState] = useState(true);
          const [infoHoverState, setInfoHoverState] = useState(false);
          const { email, password } = userCredentials;

          const inAppSignIn = (user) => {
                    const userEmail = user.user.email;
                    const userDisplayName = user.user.displayName;
                    const userId = user.user.uid;
                    dispatch(setCurrentUser({ userId, userDisplayName, userEmail }));
                    console.log(userEmail, userDisplayName, userId);
          }

          const handleChange = event => {
                    const { value, name } = event.target;
                    setUserCredentials({ ...userCredentials, [name]: value });
          }

          const handleMouseEnterInfo = () => {
                    setInfoHoverState(true);
                    setSignInHoverState(false);
          }

          const handleMouseLeaveInfo = () => {
                    setInfoHoverState(false);
                    setSignInHoverState(true);
          }

          const handleMouseEnterSignIn = () => {
                    setSignInHoverState(true);
          }

          const handleMouseLeaveSignIn = () => {
                    // console.log("yay")
          }

          const handleGoogleClick = () => {
                    GoogleSignInToFirestore().then((user) => {
                              inAppSignIn(user);
                              console.log(user)
                    }
                    )
                    setUserCredentials({ email: '', password: '' })
          }

          const handleSubmit = () => {
                    SignInToFirestore(userCredentials).then((user) => {
                              inAppSignIn(user);
                    })
                    setUserCredentials({ email: '', password: '' })
          }

          const handleClick = () => {
                    dispatch(setAuthMode("sign-up"));
          }

          return (
                    <div className="sign-container">
                              <div
                                        className={`info-part ${infoHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterInfo}
                                        onMouseLeave={handleMouseLeaveInfo}
                              >
                                        <h1>info part</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                                                  dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                                                  dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.</p>
                                        <CustomButton onclick={handleClick}>I Don't have an account</CustomButton>
                              </div>
                              <form
                                        className={`auth-part ${signInHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterSignIn}
                                        onMouseLeave={handleMouseLeaveSignIn}
                              >
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
                                        <CustomButton onclick={handleSubmit}>SIGN IN</CustomButton>
                                        <CustomButton type="google-sign-in" onclick={handleGoogleClick}><FcGoogle className="google-icon" />SIGN IN WITH GOOGLE</CustomButton>
                                        <Link to="/ch" className="frgt-pass-link">Forget Password</Link>
                              </form>
                    </div>
          )
};

export default SignIn;