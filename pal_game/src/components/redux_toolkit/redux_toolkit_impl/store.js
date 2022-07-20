import { configureStore } from "@reduxjs/toolkit";
import pokemonReducerFS from "./api/firstSlice";
import pokemonReducerSS from "./api/secondSlice";
import { apiUser, pokemonApi } from "./api/thirdSlice";

export const store = configureStore({
  reducer: {
    pokeReducerFS: pokemonReducerFS,
    pokeReducerSS: pokemonReducerSS,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
      [apiUser.reducerPath]: apiUser.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, apiUser.middleware),
});
