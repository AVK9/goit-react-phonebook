import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// baseUrl: 'https://659a72e5652b843dea538e7c.mockapi.io',

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
        headers.set('authorization', `Bearer ${token}`)
        console.log('tokenRTK :>> ', token);
    }

    return headers
  },
})
// console.log('baseQuery :>> ', baseQuery);

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
        }),
          addContact: builder.mutation({
            query: (newContact ) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
              }),
         invalidatesTags: ['Contact'],
        }),







    }),
    
});

export const { useFetchContactsQuery, useAddContactMutation } = contactApi;


