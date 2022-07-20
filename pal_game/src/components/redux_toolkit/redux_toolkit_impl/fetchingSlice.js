import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { pokeState } from "./initialState";
import axios from "axios";

export const fetchingSlice = createSlice({
  name: "pokemon",
  initialState: pokeState,
  reducers: {
    getPokemons: (state, action) => {
      state.pokeData = action.payload;
      state.loading = action.loading;
    },
  },
// We add extra reducers to help us in the fetch data
  extraReducers: (builder) => {
    builder.addCase(getPokemonAsync.pending, (state) => {
      state.pokeData = [];
      state.loading = true;
    });
    builder.addCase(getPokemonAsync.fulfilled, (state, { payload }) => {
      state.pokeData = payload;
      state.loading = false;
    });
    builder.addCase(getPokemonAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Create the service to get all pokemons, 'cause don't receive props
export const getPokemonAsync = createAsyncThunk(
  "getPokemon",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"); //where you want to fetch data
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// Create an async function and receive a dispatch to send the data to the state receiving props
export const getPokemonByNameAsync = (url, pokeName) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}${pokeName}`);
    dispatch(getPokemons(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

// Create an api as the doc says
export const apiPokemon = createApi({
  reducerPath: 'apiPokemon',
baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
export const { useGetPokemonByName } = apiPokemon;

export const { getPokemons } = fetchingSlice.actions;
export default fetchingSlice.reducer;
