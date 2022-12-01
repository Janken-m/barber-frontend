import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    GetProducts: builder.query({
      query: () => ({ url: "/products" }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = Api;
