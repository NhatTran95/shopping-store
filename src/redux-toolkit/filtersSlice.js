import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        brand: 'All',
        category: 'All',
        status: [],
        price: '0,0'
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },

        setSearchBrand: (state, action) => {
            state.brand = action.payload
        },

        setSearchCategory: (state, action) => {
            state.category = action.payload
        },

        setSearchPrice: (state, action) => {
            state.price = action.payload
        },

        setSearchStatus: (state, action) => {
            let statusList = state.status;

            if(statusList.includes(action.payload)) {
                statusList = statusList.filter((st) => st !== action.payload)
            }
            else {
                statusList.push(action.payload)
            }
            
            state.status = statusList
        },
    }
})

export default filtersSlice;