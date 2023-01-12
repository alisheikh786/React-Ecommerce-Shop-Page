import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/apiSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),

   
},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
