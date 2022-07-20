import { useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import Header from "./shared/components/header/header.component";
import AuthPage from "./modules/auth/auth.component";
import CheckoutPage from "./modules/checkout/checkout.componet";
import HomePage from "./modules/homepage/components/slider/hompage.component";

import "./App.css";
import { setFetchedCollections, setLoadingState } from "./config/redux/features/products/productsSlice";
import { fetchCollections } from "./config/firebase/firebase.utils";

function App() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const collections = useSelector((state) => state.products.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCollections()
      .then((fetchedCollections) => {
        console.log(fetchedCollections.data)
        dispatch(setFetchedCollections(fetchedCollections))
        dispatch(setLoadingState(false))
        console.log(collections, "app rendering")
      })
      .catch((error) => {
        console.log(error.code, error.message)
      })
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path=":collectionId" element={<HomePage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/auth" element={
            currentUser ?
              <Navigate to="/" />
              : <AuthPage />} />
          <Route exact path="/search" />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
