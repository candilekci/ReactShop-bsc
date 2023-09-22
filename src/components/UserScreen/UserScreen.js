import React, { useState } from "react";
import "./userScreen.css";
import DownIcon from "../../assets/Icons/Down.svg";
import { useSelector } from "react-redux";
import OrderCard from "../orderCard/OrderCard";
const UserScreen = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const ordersAll = useSelector((state) => state.orders.orders);
  const userOnline = useSelector((state) => state.logUser);
  const userOrders = ordersAll.filter(
    (order) => order.user.logUser.username === userOnline.logUser.username
  );
  return (
    <div>
      <button
        onClick={() => setOpenOrder(!openOrder)}
        className="open-order-btn"
      >
        Siparişlerim
        <img
          className={`down-icon ${openOrder ? "down-icon-active" : ""}`}
          src={DownIcon}
          alt="down-icon"
        />
      </button>
      {openOrder && (
        <div className="order-screen-cont">
          {userOrders.map((order) => (
            <OrderCard key={order.id} item={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserScreen;
