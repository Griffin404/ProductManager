import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form } from 'react-bootstrap';
import {
    decrement,
    increment,
    selectCount,
} from '../features/counter/counterSlice';

//this is form.  count img button

export function AddProd() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [productNameValue, setProductNameValue] = useState('');
    const [productPriceValue, setProductPriceValue] = useState('');

    return (
        <div>
            <input type='text' className='form-control'
                required value={productNameValue} onChange={e => setProductNameValue(e.target.value)}
                placeholder='Product name' />
            <input type='number' className='form-control'
                required value={productPriceValue} onChange={e => setProductPriceValue(e.target.value)}
                placeholder='Product price' />
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span >{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <button disabled={!productNameValue || !productPriceValue} >Add Product</button>
        </div>
    );
}
