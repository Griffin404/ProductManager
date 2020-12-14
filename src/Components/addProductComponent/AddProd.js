import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    selectCount,
    addProduct,
    selectImageHandler,
    selectImageHandlerStatus
} from '../../features/counter/productSlice';
import arrayIcons from '../../app/arrayIcons.js'
import addIcon from '../../icons/add.png';
import './addProduct.scss';

export function AddProd() {
    const count = useSelector(selectCount);
    const addImageStatus = useSelector(selectImageHandlerStatus);
    const dispatch = useDispatch();
    const [productNameValue, setProductNameValue] = useState('');
    const [productPriceValue, setProductPriceValue] = useState('');
    const [productImageValue, setProductImageValue] = useState('');

    return (
        <div className='add-product-body'>
            <h5>Add product to your cart list</h5>
            <input type='text' className='add-product-form'
                required value={productNameValue} onChange={e => setProductNameValue(e.target.value)}
                placeholder='   Product name...' />
            <input type='number' className='add-product-form'
                required value={productPriceValue} onChange={e => setProductPriceValue(Number(e.target.value))}
                placeholder='   Product price...' />
            <div className='counter-info-body'>
                <button
                    className='counter-btn'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                > + </button>
                <span className='counter-info'>{count}</span>
                <button
                    className='counter-btn'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                > - </button>
            </div>
            <div className='image-selection-body'>
                <div className={!addImageStatus ? `empty-image` : ''}>
                    {!addImageStatus ? <img
                        className='icon icon-selection'
                        src={productImageValue ? productImageValue : addIcon}
                        alt='icon'
                        onClick={() => dispatch(selectImageHandler())} /> :
                        <div className='icon-selection' onClick={() => dispatch(selectImageHandler())}>
                            {arrayIcons.map(el =>
                                <img
                                key={el}
                                className='icon'
                                src={el}
                                alt='icon'
                                onClick={() => setProductImageValue(el)}/>)}
                        </div>}
                </div>
            </div>
            <button
                className='add-product-btn'
                disabled={!productNameValue || !productPriceValue || !productImageValue}
                onClick={() => dispatch(addProduct({ productNameValue, productPriceValue, count, productImageValue }))}
            >Add Product</button>
        </div>
    );
}
