import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        data: []
    },
    reducers: {
        //action creater: name/type -> products/fetchData
        // fetchData: (state, action) => {
        //     return [...action.payload]
        // state = action.payload // mutation => IMMER => immutation
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDataThunkAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
            .addCase(fetchDataThunkAction.rejected, (state, action) => {

            })
    }
})

export const fetchDataThunkAction = createAsyncThunk('fetchDataThunkAction', async () => {
    let productListRes = await fetch('https://dummyjson.com/products');
    let data = await productListRes.json();
    return data?.products;
})

export default productsSlice;