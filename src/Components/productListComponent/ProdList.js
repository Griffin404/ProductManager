import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProducts,
    decrementSelectedProduct,
    incrementSelectedProduct,
    deleteProduct
} from '../../features/counter/productSlice';
import './productList.scss';

export function ProdList() {
    const products = useSelector(selectProducts);
    console.log("🚀 ~ file: ProdList.js ~ line 13 ~ ProdList ~ products", products)
    const [selectedProduct, setSelectedProduct] = useState(false);
    const dispatch = useDispatch();
    let totalPrice = 0;
    products.forEach(el => {
        totalPrice = totalPrice + el.productPriceValue * el.count;
    });

    return (
        <div className='product-list-body'>
            <h5>Product list</h5>
            {!selectedProduct ?
                <div className='product-list'>
                    {products.length !== 0 ? products.map((el, index) =>
                        <div key={el.count + el.productNameValue + el.productPriceValue + index}
                            className='product-list-item'>
                            <div className='product-list-icon'>
                                <img alt='icon' className='icon' src={el.productImageValue} />
                            </div>
                            <div className='product-item-info'>
                                <div className='product-item-name'>
                                    <p>{el.productNameValue}</p>
                                </div>
                                <div className='product-item-count-manage'>
                                    <div className='counter-info-body'>
                                        <button
                                            className='counter-btn'
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementSelectedProduct({ index }))}
                                        >+</button>
                                        <span className='counter-info'>{el.count}</span>
                                        <button
                                            className='counter-btn'
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementSelectedProduct({ index }))}
                                        >-</button>
                                    </div>
                                </div>
                                <div className='product-item-total'>
                                    <p>Total: {el.productPriceValue * el.count}$</p>
                                </div>
                            </div>
                            <div className='product-item-actions'>
                                <button className='info-btn'
                                    onClick={() => setSelectedProduct(el)}>?</button>
                                <button
                                className='remove-btn'
                                onClick={() => dispatch(deleteProduct({ index, products }))}
                                >X</button>
                            </div>
                        </div>
                    ) :
                        <div className='empty-product-error'>
                            <p>No product :(</p>
                        </div>}
                    {products.length >= 1 && <p className='product-item-name'>Total: {totalPrice}</p>}
                </div>
                :
                <div className='selected-product-body'>
                    <p className='product-item-name'>{selectedProduct.productNameValue}</p>
                    <img alt='icon' className='icon' src={selectedProduct.productImageValue} />
                    <p className='product-item-name'>Count: {selectedProduct.count}</p>
                    <p className='product-item-name'>Price: {selectedProduct.productPriceValue}$</p>
                    <p className='product-item-name'>Total: {selectedProduct.productPriceValue * selectedProduct.count}$</p>
                    <button className='remove-btn' onClick={() => setSelectedProduct(false)}>X</button>
                </div>}
        </div>
    );
}
