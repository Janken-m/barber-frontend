import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://barber-api-7ub6.onrender.com/api",
  }),
  tagTypes: ["Products", "Stylist"],
  endpoints: (builder) => ({
    GetProducts: builder.query({
      query: () => ({ url: "/products" }),
      providesTags: ["Products"],
    }),
    GetStylist: builder.query({
      query: () => "/stylist",
      providesTags: ["Stylist"],
    }),
    AddBookning: builder.mutation({
      query: ({ name, date, StylistId }) => ({
        url: `/bookning`,
        method: "POST",
        body: { name, date, StylistId },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetStylistQuery,
  useAddBookningMutation,
} = Api;
