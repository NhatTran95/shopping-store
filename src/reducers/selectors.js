import { createSelector } from "reselect";

export const filtersSelector = (state) => state.filters;
export const productsSelector = (state) => state.products;

export const filteredProductsSelector = createSelector(
    productsSelector,
    filtersSelector,
    (products, filters) => {
        const { searchText, brand, category, price, status } = filters;
        let filteredProducts = [...products];

        if (searchText) {
            filteredProducts = filteredProducts.filter((p) => p?.title.toLowerCase().includes(searchText.toLowerCase()));
        }

        if (brand !== 'All') {
            filteredProducts = filteredProducts.filter((p) => p?.brand === brand)
        }

        if (category !== 'All') {
            filteredProducts = filteredProducts.filter((p) => p?.category === category)
        }

        if (price !== '0,0') {
            const [min, max] = price.split(",")

            if(min != max) {
                filteredProducts = filteredProducts.filter((p) => p?.price*(1-Number(p?.discountPercentage)*0.01) >= min && p?.price*(1-Number(p?.discountPercentage)*0.01) < max)
            }
            else {
                filteredProducts = filteredProducts.filter((p) => p?.price*(1-Number(p?.discountPercentage)*0.01) >= min)
            }
            
        }

        if(status.length) {
            if(status.includes('In stock')) {
                filteredProducts = filteredProducts.filter((p) => p?.stock > 0)
            }

            if(status.includes('On Sale')) {
                filteredProducts = filteredProducts.filter((p) => p?.discountPercentage > 0)
            }
            
        }

        return filteredProducts

    }
)