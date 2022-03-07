import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] ,
    cartTotalQuantity : 0,
    cartTotalAmount : 0,
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id);
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
        },
        removeFromCart (state, action) {
            const nextCart = state.cartItems.filter( (item) => {
                return item._id !== action.payload._id;
            });
            state.cartItems = nextCart;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} is deleted from Cart`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme : 'colored'
                });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id );
            if ( state.cartItems[tempIndex].cartQuantity >1) {
                state.cartItems[tempIndex].cartQuantity -=1;
                toast.info(`${action.payload.name} Quantity is decreased.`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored',
                    });
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
            else if(state.cartItems[tempIndex].cartQuantity === 1) {
                const tempProduct = state.cartItems.filter( (item) => item._id !== action.payload._id );
                state.cartItems = tempProduct;
                toast.error(`${action.payload.name} is deleted from Cart`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored'
                    });
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        increaseCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id );
            state.cartItems[tempIndex].cartQuantity +=1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            toast.info(`${action.payload.name} Quantity is Increased!`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme : 'colored',
                });
        },
        clearCart (state, action) {
            state.cartItems = [];
            toast.error('Cart is Cleared.', {
                position : "bottom-left",
                autoClose : 3000,
                hideProgressBar : false,
                closeOnClick : true,
                pauseOnHover : true,
                draggable : true,
                progress : undefined,
                theme : 'colored'
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        cartTotal (state) {
            let totalQ = 0;
            let totalA = 0;
            const temp = state.cartItems.map( (items, act) => {
                const { cartQuantity, price } = items;
                const totalAmount = price * cartQuantity;
                //alert(JSON.stringify(totalAmount));
                totalA += totalAmount;
                totalQ += items.cartQuantity;
                const temp = {
                    totalA,
                    totalQ
                }
                return temp;
            })
            state.cartTotalAmount = temp.length > 0 ? temp[temp.length-1].totalA ? temp[temp.length-1].totalA : 0 : 0;
            state.cartTotalQuantity = temp.length > 0 ? temp[temp.length-1].totalQ ? temp[temp.length-1].totalQ : 0 : 0;
        }
    }
});
export const { addToCart, removeFromCart, increaseCart, decreaseCart, clearCart, cartTotal } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cartItems;
export const getCompleteCart = (state) => state.cart;