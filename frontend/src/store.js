import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
const initailState = {
  cart:{
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
  }
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
})
const store = configureStore({ reducer }, initailState)
export default store
