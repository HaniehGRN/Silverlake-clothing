import Header from "./shared/components/header/header.component";
import Menu from "./shared/components/menu/menu.component";
import AuthPage from "./modules/auth/auth.component";
import SignIn from "./modules/sign-in/sign-in.component";
import CustomButton from "./shared/components/custom-button/custom-button.component";
import CheckoutPage from "./modules/checkout/checkout.componet";
import CollectionItem from "./shared/components/collection-item/collection-item.component";
import Collection from "./modules/collection/collection.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <Header />
      <Menu />
      <Collection />
      {/* <CheckoutPage /> */}
      {/* <AuthPage /> */}
    </div>
  );
}

export default App;
