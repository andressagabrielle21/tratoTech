import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICart {
  id: string,
  quantity: number,
}

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, {payload}: PayloadAction<string>) => {
      const hasItem = state.some(item => item.id === payload)
      // spreading the state is important to the principle of immutability. 
      // we make a copy of the previous state, so we dont change the original one
      // Each rendering is a NEW VARIABLE
      if (!hasItem) {
        return [...state, {id: payload, quantity: 1}]
      } 
      return state.filter(item => item.id !== payload)
    },
    quantityItem: (state, {payload}: PayloadAction<ICart>) => {
      state.map(itemInCart => {
        if (itemInCart.id === payload.id) itemInCart.quantity += payload.quantity;

        return itemInCart
      })
    },
    resetCart: () => initialState
  }
})

export const {changeCart, quantityItem, resetCart} = cartSlice.actions;

export default cartSlice.reducer