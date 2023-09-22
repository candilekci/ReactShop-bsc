import React, { useState } from "react";
import DownIcon from "../../assets/Icons/Down.svg";
import "./orderCard.css";
const OrderCard = ({ item }) => {
  const [openOldOrder, setOpenOldOrder] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenOldOrder(!openOldOrder)}
        key={item.orderTime}
        className="order-card-container"
      >
        <div className="orderCard-header-cont">
          <p className="order-card-header">Sipariş Tarihi: {item.orderDate}</p>
          <div className="order-card-img-cont">
            {item.basket.slice(0, 3).map((product, index) => (
              <img
                className="order-card-img"
                key={index}
                src={product.image}
                alt={`Product ${index + 1}`}
              />
            ))}
          </div>
          <p className="order-card-time">
            Sipariş saati: {item.orderTime.substring(0, 5)}
          </p>
        </div>
        <div className="order-card-price-cont">
          <p className="order-card-price">Toplam: {item.total.toFixed(2)} TL</p>
        </div>
        <img src={DownIcon} alt="down-icon" className="order-card-down" />
      </button>
      {openOldOrder && (
        <div className="order-info-container">
          <div className="order-info-header-cont">
            <p className="order-info-header"> Sipariş no: 658741237 </p>
            <p className="order-info-date">
              {" "}
              {item.orderDate} - {item.orderTime.substring(0, 5)}
            </p>
          </div>
          <div className="order-info-card-content">
            {item.basket.map((product) => (
              <div className="order-info-card-cont">
                <div className="order-info-card">
                  <div>
                    <p className="order-info-name">{product.title}</p>
                    <p className="order-cat">{product.category}</p>
                  </div>
                  <div>
                    <p className="order-price">Ürün Fiyatı: {product.price}</p>
                    <p className="order-count-price">
                      {product.total} adet satın alındı. Toplam:{" "}
                      {product.price * product.total} TL
                    </p>
                  </div>
                </div>
                <div className="order-info-img-cont">
                  <img
                    className="order-info-img"
                    src={product.image}
                    alt={`Product ${product.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="order-info-total-cont">
            <p className="order-info-payment">
              {item.payment === "cash" ? "Nakit" : "Kredi Kartı"} ile ödendi.
            </p>
            <p className="order-info-total">
              Toplam: {item.total.toFixed(2)} TL
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
