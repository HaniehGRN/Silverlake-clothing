import SignUp from "./modules/sign-up/sign-up.component";
import Header from "./shared/components/header/header.component";
import Menu from "./shared/components/menu/menu.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <SignUp />
    </div>
  );
}

export default App;
