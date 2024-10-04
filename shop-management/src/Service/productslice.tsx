import { apislice } from "./apislice";

const productSlice = apislice.injectEndpoints({
    endpoints: (builder:any) => ({
        productAdd : builder.mutation({
        query: (data: any) => ({
          url: "/create",
          method: "",
          body: data,
        }),
      }),
//         getCategory: builder.query({
//           query: (data: any) => ({
//           url: "/category/getAllCategory",
//           method: "GET",
//           body: data,
//         }) 
//       }),
//       updateCategory: builder.mutation({
//         query: ({id,data}) => ({
//         url: `/category/update/${id}`,
//         method: "PATCH",
//         body:data
//     }),
//   }),
//   deleteCategory: builder.mutation({
//     query: (data: any) => ({
//     url: "/category/delete/:id",
//     method: "DELETE",
//     body: data,
//   }), 
//   }),
  }),
})

export const {useProductAddMutation} = productSlice