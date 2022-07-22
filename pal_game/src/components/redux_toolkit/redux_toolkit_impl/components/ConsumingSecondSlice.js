import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByNameAsync } from "../api/secondSlice";
import '../../../../styles/css/ConsumingSecondSlice.css'

export const ConsumingSecondSlice = () => {
  const [pokeName, setPokeName] = useState("");
  const dispatch = useDispatch();

  const { pokeDataSecond } =
    useSelector((state) => state.pokeReducerSS);

  return (
    <div className="container-header">
      <div className="header-con">
      <input className="input-pokemon" onChange={(e) => { setPokeName(e.target.value); }} type="text" />
      <button className="fetch-button-pokemon" onClick={() =>
          dispatch( getPokemonByNameAsync( "https://pokeapi.co/api/v2/pokemon/", pokeName ) ) }>
        Search a pokemon using useState
      </button>
            </div>
      {pokeDataSecond.length == 0 ? <h2>Give me a poke name!</h2> :
        pokeDataSecond == "Error in the name" ?
          <h3>Error in the name, try again with other name</h3>:
        <div className="card-container">
          <h3> Pokemon name: {pokeDataSecond?.name} </h3>
          {pokeDataSecond.abilities.map((pokemon) => {
           return (<p> Ability name: {pokemon?.ability?.name} </p>)
         })}
          <img src={pokeDataSecond?.sprites?.front_default} alt="img" />
        </div>
      }
    </div>
  );
};
