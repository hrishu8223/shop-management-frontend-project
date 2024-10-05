import { apislice } from "./apislice";

const productSlice = apislice.injectEndpoints({
    endpoints: (builder:any) => ({
      createProduct : builder.mutation({
        query: (data: any) => ({
          url: "/product/create",
          method: "POST",
          body: data,
        }),
      }),
      ListingProduct : builder.query({
          query: (data: any) => ({
          url: "/product/getAllProducts",
          method: "GET",
          body: data,
        }) 
      }),
//       updateCategory: builder.mutation({
//         query: ({id,data}) => ({
//         url: `/category/update/${id}`,
//         method: "PATCH",
//         body:data
//     }),
//   }),
deleteProduct: builder.mutation({
    query: (data: any) => ({
    url: "/product/delete/:id",
    method: "DELETE",
    body: data,
  }), 
  }),
  }),
})

export const {useCreateProductMutation, useListingProductQuery, useDeleteProductMutation} = productSlice