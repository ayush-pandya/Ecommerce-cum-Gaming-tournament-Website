// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./HomePageComponent/Header";
import Home from "./HomePageComponent/Home";
import ProductPage from "./ProductPageComponent/productPage";
import ProductPageData from "./ProductPageComponent/ProductPageData";
import Product from "./ProductPageComponent/Product";
import Checkout from "./Others/Checkout";
import Signup from "./Others/Signup";
import Login from "./Others/Login";
import ItemPage from "./ProductPageComponent/ItemPage";
import Tourney from './TeamPageComponent/Tourney';
import Team from './TeamPageComponent/Team';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { useStateValue} from './StateProvider'
import Showtourney from './TeamPageComponent/Showtourney';
function App() {
  const [{ loggedInUser }, dispatch] = useStateValue();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userauth) => {
  //     if (userauth) {
  //       dispatch({
  //         type: 'SET_LOGIN',
  //         loggedInUser: userauth
  //       })
  //     } else {
  //       dispatch({
  //         type: "SET_LOGIN",
  //         loggedInUser: userauth,
  //       });
  //     }
  //   })
  // })
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/productPage"
            element={<ProductPage/>}
          ></Route>
          <Route path="/ram" element={<ProductPage type="Ram" />}></Route>
          <Route
            path="/motherboard"
            element={<ProductPage type="Motherboard" />}
          ></Route>
          <Route path="/gpu" element={<ProductPage type="Gpu" />}></Route>
          <Route path="/games" element={<ProductPage type="Game" />}></Route>
          <Route
            path="/giftcards"
            element={<ProductPage type="Giftcard" />}
          ></Route>
          <Route
            path="/tornament"
            element={<ProductPage type="Tornament" />}
          ></Route>
          <Route
            path="/ProducPageData"
            element={ProductPageData}
          ></Route>
          <Route
            path="/Signup"
            element={<Signup/>}
          ></Route>
          <Route
            path="/Tourney"
            element={<Tourney/>}
          ></Route>
          <Route
            path="/Team"
            element={<Team/>}
          ></Route>
          <Route
            path="/Showtourney"
            element={<Showtourney/>}
          ></Route>
        </Routes>
      </div>
    </Router>
    // {/* <div className="App">
    //   <Header />
    //   <Home />
    //   <ProductPage />
    //   <Checkout />
    // </div> */}
  );
}

export default App;
