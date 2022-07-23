import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

export const cartSlice = createSlice({
          name: "cart",
          initialState: { items: [], total: 0 },
          reducers: {
                    addItem: (state, action) => {
                              state.items = action.payload
                    },
                    removeItem: (state, action) => {
                              state.items = action.payload
                    },
                    clearItemFromCart: (state, action) => {
                              state.items = state.items.filter((item) => item.id !== action.payload.id)
                    },
                    clearCart: (state) => {
                              state.items = []
                    },
                    setTotal: (state, action) => {
                              state.total = action.payload
                    }
          }
});

export const { addItem, removeItem, clearItemFromCart, clearCart, setTotal } = cartSlice.actions;

export default cartSlice.reducer;