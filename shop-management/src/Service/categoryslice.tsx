import { apislice } from "./apislice";

const categorySlice = apislice.injectEndpoints({
    endpoints: (builder:any) => ({
      name: builder.mutation({
        query: (data: any) => ({
          url: "/category/addCategory",
          method: "POST",
          body: data,
        }),
      }),
        getCategory: builder.query({
          query: (data: any) => ({
          url: "/category/getAllCategory",
          method: "GET",
          body: data,
        }) 
      }),
      updateCategory: builder.mutation({
        query: ({id,data}) => ({
        url: `/category/update/${id}`,
        method: "PATCH",
        body:data
    }),
  }),
  deleteCategory: builder.mutation({
    query: (data: any) => ({
    url: "/category/delete/:id",
    method: "DELETE",
    body: data,
  }), 
  }),
  }),
})

export const {useNameMutation, useGetCategoryQuery,useUpdateCategoryMutation, useDeleteCategoryMutation } = categorySlice