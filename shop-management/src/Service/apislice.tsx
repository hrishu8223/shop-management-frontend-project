import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apislice = createApi({
    reducerPath: 'apislice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1000',
    }),
  
    endpoints: () => ({})
})


