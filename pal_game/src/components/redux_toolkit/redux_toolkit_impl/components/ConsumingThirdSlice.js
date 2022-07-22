import React from "react";
import { useGetPokemonByNameQuery } from "../api/thirdSlice";

export const ConsumingThirdSlice = () => {
  const name = React.useRef();
  const { data, isLoading } = useGetPokemonByNameQuery(
    name?.current?.value === "" || name?.current?.value === undefined
      ? "rattata"
      : name?.current?.value
  );
  const handleSubmit = () => {
    alert("Works better in forms: " + name.current.value);
  };

  return (
    <div>
      <input type="text" ref={name} />
      <button onClick={handleSubmit}>Send</button>

      {isLoading ? (
        <h1>Loading</h1>
      ) : data.length == 0 ? (
        <h4>Not data</h4>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          {data.abilities.map((pokemon, index) => {
            return <h4 key={index}>Ability: {pokemon.ability.name}</h4>;
          })}
        </div>
      )}
    </div>
  );
};
