import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    latestProducts: builder.query({
      query: () => "latest",
      providesTags: ["product"],
    }),
    allProducts: builder.query({
      query: (id) => `all`,
      providesTags: ["product"],
    }),
    categories: builder.query({
      query: () => `categories`,
      providesTags: ["product"],
    }),

    searchProducts: builder.query({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page=${page}`;

        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;

        return base;
      },
      providesTags: ["product"],
    }),

    productDetails: builder.query({
      query: (id) => id,
      providesTags: ["product"],
    }),

    allReviewsOfProducts: builder.query({
      query: (productId) => `reviews/${productId}`,
      providesTags: ["product"],
    }),

    newReview: builder.mutation({
      query: ({ comment, rating, productId, userId }) => ({
        url: `review/new/${productId}?id=${userId}`,
        method: "POST",
        body: { comment, rating },
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["product"],
    }),

    deleteReview: builder.mutation({
      query: ({ reviewId, userId }) => ({
        url: `/review/${reviewId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    newProduct: builder.mutation({
      query: ({ formData, id }) => ({
        url: `new?id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: ({ formData, userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: ({ userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useAllReviewsOfProductsQuery,
  useCategoriesQuery,
  useSearchProductsQuery,
  useNewReviewMutation,
  useDeleteReviewMutation,
  useNewProductMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productAPI;
