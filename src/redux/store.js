import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import orderReducer from "./slice/orderSlice";
import basketReducer from "./slice/basketSlice";
import usersReducer from "./slice/usersSlice";
import logUserReducer from "./slice/logUserSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
    basket: basketReducer,
    users: usersReducer,
    logUser: logUserReducer,
  },
});
