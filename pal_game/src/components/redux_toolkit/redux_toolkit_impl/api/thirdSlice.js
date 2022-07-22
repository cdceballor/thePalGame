import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { pokeStateThirdSlice } from '../initialState';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokeReducerTS',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts/' }),
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `${id}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi;
export const { useGetUserByIdQuery } = apiUser;
