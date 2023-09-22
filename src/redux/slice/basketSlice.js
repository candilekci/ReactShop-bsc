import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removeBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseBasket: (state, action) => {
      state.basket = state.basket.map((item) =>
        item.id === action.payload.id
          ? { ...item, total: item.total + 1 }
          : item
      );
    },
    decraseBasket: (state, action) => {
      state.basket = state.basket.map((item) =>
        item.id === action.payload.id
          ? { ...item, total: item.total - 1 }
          : item
      );
    },
    deleteBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  addBasket,
  deleteBasket,
  removeBasket,
  increaseBasket,
  decraseBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
