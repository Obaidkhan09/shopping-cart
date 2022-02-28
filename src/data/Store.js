import { configureStore } from '@reduxjs/toolkit';
import productReducer, { productsFetch } from '../features/productSlice';
import cartReducer from '../features/cartSlice'
const store = configureStore({
    reducer : {
        products : productReducer,
        cart : cartReducer,
    }
});

store.dispatch(productsFetch());
export default store;