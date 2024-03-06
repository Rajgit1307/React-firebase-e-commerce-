import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cartItems')) ?? [];

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     AddtoCart(state,action) {
         state.push(action.payload)
    },
    deletFromCart(state,action){
        return state.filter(item=>item.id !== action.payload.id);
    }
  },
})

// Action creators are generated for each case reducer function
export const {AddtoCart,deletFromCart} = CartSlice.actions

export default CartSlice.reducer