import { useState } from "react";
import { MdEmail, MdOutlinePassword } from "react-icons/md";

import FormInput from "../../shared/components/form-input/form-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {

          const [email, setEmail] = useState('');

          const handleChange = (event) => {
                    setEmail(event.target.value);
          }

          return (
                    <div className="sign-in">
                              <div className="info-part">
                                        <h1>Sign up for free</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad neque nobis debitis aperiam
                                                  dolor ullam quia? Dolorum quasi, tempore ut asperiores qui distinctio temporibus sunt.
                                        </p>
                              </div>
                              <div className="sign-in-part">
                                        <form>
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
                                        </form>
                              </div>
                    </div>
          )
};

export default SignIn;