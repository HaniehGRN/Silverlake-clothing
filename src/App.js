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

import "./App.css";

function App() {

  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/auth" element={
            // currentUser ?
            //   <Navigate to="/" />
            //   : <AuthPage />
            <AuthPage />} />
          <Route exact path="/search" />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
      {/* <Menu /> */}
      {/* <Collection /> */}
      {/* <CheckoutPage /> */}
      {/* <AuthPage /> */}
    </div>
  );
}

export default App;
