import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

export const cartSlice = createSlice({
          name: "cart",
          initialState: { items: [] },
          reducers: {
                    addItem: (state, action) => {
                              state.items = addItemToCart(state.items, action.payload)
                    },
                    removeItem: (state, action) => {
                              state.items = removeItemFromCart(state.items, action.payload)
                    }
          }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;