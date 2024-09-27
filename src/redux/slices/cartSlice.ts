import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state: any, action: any) => {
      state.items = state.items.filter((item : any) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
