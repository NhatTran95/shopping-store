import React, { useContext } from "react";
import { FaCartArrowDown, FaStar, FaStarHalf } from "react-icons/fa";
import Star from "../Star/Star";

function Product({product}) {

    return (
        <div className="col-md-3 mb-4" >
            <div className="card d-flex align-items-center pt-4" style={{height: '500px'}}>
                <img src={product?.images[0]} 
                    className="card-image-top" alt="" 
                    style={{width: "90%", height: '300px'}}
                />
                <div className="w-100 px-4 py-3">
                    <p className="fw-bolder text-center" style={{height:'50px'}}>{product?.brand} - {product?.title}</p>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="me-1">
                            <Star star= {product?.rating}/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="fs-10 badge bg-success">
                            {product?.stock} In stock
                        </div>
                        <div className="fs-10 badge bg-danger">
                            {product?.discountPercentage ? 'On sale' : ''}
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                         <div>
                            <del className="line-through me-2">{product?.price}</del>
                            <span className="fs-4 text-danger fw-bolder">${Math.floor((product?.price*(1-Number(product?.discountPercentage)*0.01)))}</span>
                        </div>   
                        <FaCartArrowDown size={20} className="btn-cart"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;