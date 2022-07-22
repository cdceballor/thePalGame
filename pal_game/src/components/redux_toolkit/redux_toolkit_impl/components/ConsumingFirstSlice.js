import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../../../styles/css/ConsumingFirstSlice.css';
import { getPokemonAsync } from "../api/firstSlice";
export const ConsumingFirstSlice = () => {
  const dispatch = useDispatch();
  const { pokeData, loading } = useSelector((state) => state.pokeReducerFS);

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, []);

  return (
    <div className="header-container">
      <h3 className="initial-title">
        We are consuming the firs slice with a normal way to consume data
        without props
      </h3>
      <h4 className="number-pokemon">Number of pokemon: {pokeData.count} </h4>
      <div className="container-pokemon">
        {pokeData.length == 0 ? (
          <h4> Loading </h4>
        ) : (
          <>
            {pokeData.results.map((pokemon, index) => {
              return <p key={index}> {pokemon?.name} </p>;
            })}
          </>
        )}
          </div>
    </div>
  );
};
