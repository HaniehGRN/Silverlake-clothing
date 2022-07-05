import { useState } from "react";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import CustomButton from "../../shared/components/custom-button/custom-button.component";

import FormInput from "../../shared/components/form-input/form-input.component";

import "../sign-up/sign-up.styles.scss";
import "./sign-in.styles.scss";

const SignIn = () => {

          const [email, setEmail] = useState('');
          const [infoHoverState, setInfoHoverState] = useState(false);
          const [signInHoverState, setSignInHoverState] = useState(true);

          const handleChange = (event) => {
                    setEmail(event.target.value);
          }

          const handleSubmit = () => {
                    // store 
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
                    ///
          }

          return (
                    <div className="sign-in">
                              <div
                                        className={`info-part ${infoHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterInfo}
                                        onMouseLeave={handleMouseLeaveInfo}
                              >
                                        <h1>Sign In to your account</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                                                  dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.
                                        </p>
                                        <CustomButton>I Don't have an account</CustomButton>
                              </div>
                              <div
                                        className={`auth-part ${signInHoverState === true ? "highlighted" : ""}`}
                                        onMouseEnter={handleMouseEnterSignIn}
                                        onMouseLeave={handleMouseLeaveSignIn}
                              >
                                        <form onSubmit={handleSubmit}>
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
                                                  <CustomButton>SIGN IN</CustomButton>
                                                  <CustomButton type="google-sign-in"><FcGoogle  className="google-icon"/>SIGN IN WITH GOOGLE</CustomButton>
                                                  <a href="/" className="frgt-pass-link">Forget Password</a>
                                                  {
                                                            /*Link */
                                                  }
                                        </form>
                              </div>
                    </div>
          )
};

export default SignIn;