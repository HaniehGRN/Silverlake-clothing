import { useState } from "react";
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

import "./auth.styles.scss";

const AuthPage = () => {

          const [authMode, setAuthMode] = useState("sign-in");

          return (
                    <div className="auth-page">
                              <h2>Welcome.</h2>
                              <SignUp/>
                    </div>
          )
};

export default AuthPage;