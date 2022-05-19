import Header from "./shared/components/header/header.component";
import Menu from "./shared/components/menu/menu.component";
import AuthPage from "./modules/auth/auth.component";
import SignIn from "./modules/sign-in/sign-in.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AuthPage />
    </div>
  );
}

export default App;
