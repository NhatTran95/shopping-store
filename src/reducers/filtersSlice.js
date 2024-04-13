import { searchText } from "./actions";

const initState = {
    searchText: '',
    status: [],
    brand: 'All',
    category: 'All',
    price: '0,0'
}

const filtersSlice = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchText':
            return {
                ...state,
                searchText: action.payload
            }
        case 'filters/searchBrand':
            return {
                ...state,
                brand: action.payload
            }
        case 'filters/searchCategory':
            return {
                ...state,
                category: action.payload
            }
        case 'filters/searchPrice':
            return {
                ...state,
                price: action.payload
            }
        case 'filters/searchStatus':
            return {
                ...state,
                status: action.payload
            }

        default:
            return state;
    }
}

export default filtersSlice;