import React from "react";
import "./ProductCard.css";
import Star from "../../assets/Icons/Star.svg";
import { addBasket, increaseBasket } from "../../redux/slice/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddBasket = () => {
    if (basket.find((item) => item.id === product.id)) {
      dispatch(increaseBasket({ id: product.id }));
    } else {
      const productWithQuantity = {
        ...product,
        total: 1,
      };
      dispatch(addBasket(productWithQuantity));
    }
  };

  const basket = useSelector((state) => state.basket.basket);

  return (
    <div className="product-card-cont">
      <Link to={`/productDetail/${product.id}`}>
        <img
          alt="productImage"
          src={product.image}
          className="product-card-img"
        />
      </Link>
      <span className="product-name">{product.title}</span>
      <div className="rating-container">
        <span className="product-rating">{product.rating.rate}</span>
        <img alt="star" src={Star} className="star" />
      </div>
      <span className="product-price">{product.price} TL</span>
      <button onClick={handleAddBasket} className="add-basket">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
