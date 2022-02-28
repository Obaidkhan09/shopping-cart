import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] ,
    cartTotalQuantity : 0,
    cartTotalAmounr : 0,
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id);
            if (tempIndex >=0) {
                state.cartItems[tempIndex].cartQuantity +=1;
                toast.info(`${state.cartItems[tempIndex].name} Quantity is Increased.!`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored'
                    });

            }
            else {
                const tempProduct = { ...action.payload, cartQuantity : 1}
                state.cartItems.push(tempProduct);
                toast.success(`${tempProduct.name} Added to Cart.!`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored'
                    });

            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;