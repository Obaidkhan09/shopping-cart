import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../constants/constants'

export const productsFetch = createAsyncThunk(
    'products/productFetch',
    async ( id=null, {rejectWithValue}) => {
        try {
            const response = await axios.get('/products');
            return response?.data;
        }
        catch (err) {
            return rejectWithValue( "An error occured while fetching data.!" ,err.response.data);
        }
    }
);

const initialState = {
    item: [],
    status: null,
    error: null,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending';
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.item = action.payload
        }
    }
});

export default productSlice.reducer;
export const getItem = (state) => state.products.item; 