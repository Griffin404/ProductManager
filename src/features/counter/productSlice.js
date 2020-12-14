import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    count: 1,
    products: [],
    selectImageStatus: false
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count === 1 ? state.count = 1 : state.count -= 1;
    },
    addProduct: (state, action) => {
      console.log(state)
      state.products.push(action.payload)
    },
    deleteProduct: (state, action) => {
      let products = [];
      action.payload.products.forEach((el, index) => {
        if (index !== Number(action.payload.index)) {
          products.push(el);
        }
      })
      state.products = products;
    },
    selectImageHandler: state => {
      state.selectImageStatus === true ? state.selectImageStatus = false : state.selectImageStatus = true;
    },
    incrementSelectedProduct: (state, action) => {
      state.products[action.payload.index].count += 1;
    },
    decrementSelectedProduct: (state, action) => {
      state.products[action.payload.index].count === 1 ? state.products[action.payload.index].count = 1 : state.products[action.payload.index].count -= 1;
    },

  },
});

export const { increment, decrement, addProduct, deleteProduct, selectImageHandler, incrementSelectedProduct, decrementSelectedProduct } = productSlice.actions;

export const selectCount = state => state.products.count;

export const selectProducts = state => state.products.products;

export const selectImageHandlerStatus = state => state.products.selectImageStatus;

export default productSlice.reducer;
