import { createSlice } from "@reduxjs/toolkit";
import Cart from "../components/Cart/Cart";
import { uiActions } from "./ui-slice";

const initialCartState = { products: [], totalQuantity: 0, changed: false};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {

    replaceCart(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.products = action.payload.products;
    },
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
          name: newProduct.title,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },

    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      state.totalQuantity--;
      state.changed = true;
      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.totalPrice - existingProduct.price;
      }
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice;
