import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkAction } from "../../redux-toolkit/productsSlice";
import { filteredProductsSelector} from "../../store/selector";

function Products(){
    const dispatch = useDispatch();
    const filteredProducts = useSelector(filteredProductsSelector)

    useEffect(() => {
        dispatch(fetchDataThunkAction())
    }, [])

   
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                   
                   filteredProducts?.map((product) => (
                            <Product key={product.id} product={product}/>
                        ))
                    
                }
                
            </div>
        </div>
    )
}

export default Products;