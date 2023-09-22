import React, { useState } from "react";
import "./basketScreen.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeBasket,
  increaseBasket,
  decraseBasket,
  deleteBasket,
} from "../../redux/slice/basketSlice";
import DeleteIcon from "../../assets/Icons/Delete.svg";
import { addOrder } from "../../redux/slice/orderSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const userOnline = useSelector((state) => state.logUser);
  const basket = useSelector((state) => state.basket.basket);
  const [payment, setPayment] = useState("");
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
    if (userOnline.online) {
      if (payment !== "") {
        const currentDate = new Date();
        const orderDate = currentDate.toLocaleDateString();
        const orderTime = currentDate.toLocaleTimeString();
        dispatch(
          addOrder({
            basket: basket,
            total: total,
            user: userOnline,
            payment: payment,
            orderDate: orderDate,
            orderTime: orderTime,
          })
        );
        alert("Siparişiniz Alınmıştır");
        dispatch(deleteBasket());
      } else {
        alert("Lütfen Ödeme Yöntemi Seçiniz");
      }
    } else {
      alert("Lütfen Giriş Yapınız");
    }
  };
  return (
    <div className="basketScreen">
      <div className="basket-screen-cont">
        <p className="basket-screen-header">Sepetim</p>
        <div className="basket-screen-content">
          {basket.length > 0 ? (
            <div>
              {basket.map((item) => (
                <div key={item.id} className="basket-screen-card">
                  <img
                    alt="product"
                    src={item.image}
                    className="basket-screen-img"
                  />
                  <div className="basket-screen-info">
                    <div>
                      <p className="basket-screen-title">{item.title}</p>
                      <p className="basket-screen-category">{item.category}</p>
                    </div>
                    <p className="basket-screen-price">{item.price} TL</p>
                  </div>
                  <div className="count-del-cont">
                    <div className="basket-screen-delete-cont">
                      <button
                        className="basket-card-delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        <img
                          alt="delete"
                          src={DeleteIcon}
                          className="basket-card-delete-icon"
                        />
                      </button>
                    </div>
                    <div className="basket-screen-count-cont">
                      <button
                        disabled={item.total === 1}
                        className="basket-card-count-btn"
                        onClick={() => handleDecrase(item.id)}
                      >
                        -
                      </button>
                      <span className="basket-card-count">{item.total}</span>
                      <button
                        className="basket-card-count-btn"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <p className="basket-screen-total">
                Toplam: {total.toFixed(2)} TL
              </p>
              {userOnline.online ? (
                <div className="payment-cont">
                  <span className="payment-text">Ödeme Yöntemi:</span>
                  <div className="payment-method-cont">
                    <label className="payment-method-title">Kredi Kartı</label>
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment"
                      value="credit-card"
                      onChange={(e) => setPayment(e.target.value)}
                    />
                  </div>
                  <div className="payment-method-cont">
                    <label className="payment-method-title">Nakit</label>
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      onChange={(e) => setPayment(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}
              <button onClick={submitOrder} className="basket-screen-button">
                Sepeti Onayla!
              </button>
            </div>
          ) : (
            <div className="basket-screen-empty">
              <p className="basket-screen-empty-text">Sepetiniz Boş</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
