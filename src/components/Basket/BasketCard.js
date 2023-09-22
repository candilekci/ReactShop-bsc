import React from "react";
import "./basket-card.css";
import BasketIcon from "../../assets/Icons/Basket.svg";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "../../assets/Icons/Delete.svg";
import { useNavigate } from "react-router-dom";
import {
  removeBasket,
  increaseBasket,
  decraseBasket,
} from "../../redux/slice/basketSlice";
const BasketCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket.basket);
  const onlineUser = useSelector((state) => state.logUser);

  let total = 0;
  basket.map((item) => (total += item.price * item.total));

  const handleDelete = (itemId) => {
    dispatch(removeBasket({ id: itemId }));
  };
  const handleIncrease = (itemId) => {
    dispatch(increaseBasket({ id: itemId }));
  };
  const handleDecrase = (itemId) => {
    dispatch(decraseBasket({ id: itemId }));
  };
  const submitOrder = () => {
    if (onlineUser.online) {
      navigate("/userBasket");
    } else {
      alert("Lütfen Giriş Yapınız");
    }
  };
  return (
    <div className="basket-container">
      <div className="header-container">
        <p className="basket-header">Sepetim</p>
        <img alt="icon" src={BasketIcon} className="basket-icon" />
      </div>
      {basket.length > 0 ? (
        <div>
          <div className="basket-content">
            {basket.map((item) => (
              <div key={item.id} className="basket-card-item">
                <img
                  alt="product"
                  src={item.image}
                  className="basket-card-img"
                />
                <div className="basket-card-info">
                  <p className="basket-card-title">{item.title}</p>
                  <p className="basket-card-price">{item.price} TL</p>
                  <div className="delete-count-cont">
                    <div className="basket-card-count-cont">
                      <button
                        disabled={item.total === 1}
                        className="basket-card-count-btn"
                        onClick={() => handleDecrase(item.id)}
                      >
                        -
                      </button>
                      <span className="basket-card-count">{item.total}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="basket-card-count-btn"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      id={item.id}
                      className="basket-card-delete-btn"
                    >
                      <img
                        alt="delete"
                        src={DeleteIcon}
                        className="basket-card-delete-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="basket-card-total">Toplam: {total.toFixed(2)} TL</p>
            <button onClick={submitOrder} className="basket-card-button">
              Sepeti Onayla
            </button>
          </div>
        </div>
      ) : (
        <div className="basket-empty">
          <p className="basket-empty-text">Sepetiniz Boş</p>
        </div>
      )}
    </div>
  );
};

export default BasketCard;
