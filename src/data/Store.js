import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';

const store = configureStore({
    reducer : {
        products : productReducer,
    }
});
console.log(productReducer);
export default store;