import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "productAi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
        })
    })
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;