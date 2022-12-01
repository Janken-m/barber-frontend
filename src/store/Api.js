import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://barber-api-7ub6.onrender.com/api",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    GetProducts: builder.query({
      query: () => ({ url: "/products" }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = Api;
