// Looking a tutorial where I applied this method to save the storage

import { createSlice } from "@reduxjs/toolkit";

import { pokeStateSecondSlice } from "../initialState";
import axios from "axios";

export const secondSlice = createSlice({
  name: "pokemon",
  initialState: pokeStateSecondSlice,
  reducers: {
    getPokemonsAsync: (state, action) => {
      state.pokeDataSecond = action.payload;
      state.loading = action.loading;
    },
  },
});

// Create an async function and receive a dispatch to send the data to the state receiving props and async await
export const getPokemonByNameAsync = (url, pokeName) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}${pokeName}`);
    dispatch(getPokemonsAsync(response.data));
  } catch (err) {
      dispatch(getPokemonsAsync("Error in the name"));
      throw new Error(err);
  }
};

export const { getPokemonsAsync } = secondSlice.actions;
export default secondSlice.reducer;
