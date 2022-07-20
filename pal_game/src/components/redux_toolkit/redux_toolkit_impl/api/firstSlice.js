// A NORMAL SLICE BY A COURSE
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { pokeState } from "../initialState";
import axios from "axios";

export const firstSlice = createSlice({
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

// Create the service to get all pokemons, 'cause don't receive props and we use createAsyncThunk
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

export const { getPokemons } = firstSlice.actions;
export default firstSlice.reducer;
