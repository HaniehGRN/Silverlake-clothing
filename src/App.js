import Header from "./shared/components/header/header.component";
import Menu from "./shared/components/menu/menu.component";
import AuthPage from "./modules/auth/auth.component";
import SignIn from "./modules/sign-in/sign-in.component";
import CustomButton from "./shared/components/custom-button/custom-button.component";
import CheckoutPage from "./modules/checkout/checkout.componet";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CheckoutPage />
      {/* <AuthPage /> */}
    </div>
  );
}

export default App;
