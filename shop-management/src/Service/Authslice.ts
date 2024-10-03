
import { apislice } from "./apislice";

const authslice = apislice.injectEndpoints({
    endpoints: (builder:any) => ({
        login: builder.mutation({
            query: (body:any) => ({
                url: '/user/login',
                method: 'POST',
                body
            })
        })

    })
})
export const {
 useLoginMutation
} = authslice