import { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

import "./auth.styles.scss";

const AuthPage = () => {

          const authMode = useSelector((state) => state.auth.authMode);

          return (
                    <div className="auth-page">
                              <h2>Welcome.</h2>
                              {authMode === "sign-up" ? <SignUp /> : <SignIn />}
                    </div>
          )
};

export default AuthPage;