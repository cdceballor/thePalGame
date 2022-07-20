import React, { useRef, useEffect, useState } from "react";
import {
  useGetPokemonByNameQuery,
  useGetUserByIdQuery,
} from "./redux_toolkit_impl/api/thirdSlice";
import { ConsumingFirstSlice } from "./redux_toolkit_impl/components/ConsumingFirstSlice";
import { ConsumingSecondSlice } from "./redux_toolkit_impl/components/ConsumingSecondSlice";

export const ReduxToolkit = ({ name }) => {
  const thirdPoke = useRef();
  const { isLoading, data, error } = useGetPokemonByNameQuery(name);

  const apiUsers = useGetUserByIdQuery("1");
  if (apiUsers.isLoading) {
    console.log("Cargando");
  } else {
    // console.log(apiUsers.data);
  }
  return (
    <>
      <ConsumingFirstSlice />
      <ConsumingSecondSlice />
    </>
  );
};
