import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoppingContext } from "../../context/shopping-context";
import { fetchData } from "../../reducer/actions";

function Products() {
    const { state, dispatch } = useContext(ShoppingContext);
    const { filters: { searchText, brand, category, price, status }, products } = state;
    useEffect(() => {
        async function getProductList() {
            let productRes = await fetch('https://dummyjson.com/products')
            let data = await productRes.json();

            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])

    function queryProducts() {
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

    const filteredProducts = queryProducts()
    console.log(status);

    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    filteredProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;