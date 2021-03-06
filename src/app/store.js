import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/counter/productSlice';

export default configureStore({
  reducer: {
    products: productReducer,
  },
});

// #configureStore — функция, предназначенная упростить процесс создания и настройки хранилища;
// #createReducer — функция, помогающая лаконично и понятно описать и создать редьюсер;
// #createAction — возвращает функцию создателя действия для заданной строки типа действия;
// #createSlice — объединяет в себе функционал createAction и createReducer;
// createSelector — функция из библиотеки Reselect, переэкспортированная для простоты использования.
