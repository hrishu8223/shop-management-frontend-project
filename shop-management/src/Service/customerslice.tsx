import { apislice } from "./apislice"

const customerSlice = apislice.injectEndpoints({
  endpoints: (builder:any) => ({
    customerAdd: builder.mutation({
      query: (data: any) => ({
        url: "customer/register",
        method: "POST",
        body: data,
      }),
    }),
    CustomerListing: builder.query({
        query: (data: any) => ({
        url: "/customer/allCustomerDetails",
        method: "GET",
        body: data,
      }) 
    }),
//     updateCustomer: builder.mutation({
//       query: ({id,data}) => ({
//       url: `/customer/update/${id}`,
//       method: "PATCH",
//       body:data
//   }),
// }),
// deleteCustomer: builder.mutation({
//   query: (data: any) => ({
//   url: "/customer/delete/:id",
//   method: "DELETE",
//   body: data,
// }), 
// }),
}),
})
export const {useCustomerAddMutation, useCustomerListingQuery, } = customerSlice