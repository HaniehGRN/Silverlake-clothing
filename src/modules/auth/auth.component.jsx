import { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

import "./auth.styles.scss";
import { Link } from "react-router-dom";

const AuthPage = () => {

          const authmode = useSelector((state) => state.auth.authMode);

          return (
                    <div className="auth-page">
                              <h2>Welcome.</h2>
                              {authmode==="sign-up" ? <SignUp /> : <SignIn />}
                    </div>
          )
};

export default AuthPage;