import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="home">
      <h2 className="home-header">Ürünlerimiz</h2>
      <div className="home-products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
