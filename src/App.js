import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Header from "./shared/components/header/header.component";
import Menu from "./shared/components/menu/menu.component";
import AuthPage from "./modules/auth/auth.component";
import SignIn from "./modules/sign-in/sign-in.component";
import CustomButton from "./shared/components/custom-button/custom-button.component";
import CheckoutPage from "./modules/checkout/checkout.componet";
import CollectionItem from "./shared/components/collection-item/collection-item.component";
import Collection from "./modules/collection/collection.component";
import HomePage from "./modules/homepage/components/slider/hompage.component";
import Login from "./modules/login/login.component";
import SignUp from "./modules/sign-up/sign-up.component";

import "./App.css";

function App() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const authmode = useSelector((state) => state.auth.authMode);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/auth" element={
            currentUser ?
              <Navigate to="/" />
              : <AuthPage />} />
          <Route exact path="/search" />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
      {/* <Router>
      {authmode === "sign-in" ? <SignIn /> : <SignUp />}
        <Routes>
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
