import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/View";
import Product from "../pages/productDetail/View";
import FavScreen from "../pages/favScreen/View";
import Basket from "../pages/BasketScreen/View";
import Navbar from "../components/Navbar/Navbar";
import BasketCard from "../components/Basket/BasketCard";
import ProductDetail from "../pages/productDetail/View";
import Login from "../pages/login/View";
import "./route.css";
const RouteApp = () => {
  const location = useLocation();
  const isBasketCardVisible = !["/userBasket", "/login"].includes(
    location.pathname
  );

  return (
    <>
      <Navbar />
      <div
        className={`route-screen ${
          isBasketCardVisible ? "show-basket-card" : ""
        }`}
      >
        {isBasketCardVisible && <BasketCard />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/userFav" element={<FavScreen />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/userBasket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RouteApp;
