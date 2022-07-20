import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByNameAsync } from "../api/secondSlice";
import '../../../../styles/css/ConsumingSecondSlice.css'

export const ConsumingSecondSlice = () => {
  const [pokeName, setPokeName] = useState("");
  const dispatch = useDispatch();

  const { pokeDataSecond, loading } =
    useSelector((state) => state.pokeReducerSS);

  console.log(pokeDataSecond)
  return (
    <div className="container-header">
      <input className="input-pokemon" onChange={(e) => { setPokeName(e.target.value); }} type="text" />
      <button className="fetch-pokemon" onClick={() =>
          dispatch( getPokemonByNameAsync( "https://pokeapi.co/api/v2/pokemon/", pokeName ) ) }>
        Search a pokemon using useState
      </button>
      {pokeDataSecond.length == 0 ? <h2>There is no data</h2> :
        <>
          <h3> Pokemon name: {pokeDataSecond?.name} </h3>
          {pokeDataSecond.abilities.map((pokemon) => {
           return (<p> Ability name: {pokemon?.ability?.name} </p>)
         })}
          <img src={pokeDataSecond?.sprites?.front_default} alt="img" />
        </>
      }
    </div>
  );
};
