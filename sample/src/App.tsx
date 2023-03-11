import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  image: string;
};

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      });
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export default App;