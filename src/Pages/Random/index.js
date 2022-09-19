import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Random() {
  const [loading, setLoading] = useState(true);
  const [randomPokemon, setRandomPokemon] = useState();

  useEffect(() => {
    setLoading(true);
    async function fetchConfigs() {
      try {
        const response = await axios.get(
          "http://localhost:8080/pokemon/random"
        );
        setRandomPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchConfigs();
  }, []);
  return (
    <div>
      <h1 className="title">Random Pokemon</h1>
      <div className="container">
        {!loading && (
          <div className="card">
            <h6>ID: {randomPokemon.id}</h6>
            <h4 className="name">{randomPokemon.name}</h4>
            <img src={randomPokemon.sprite} alt="Random Pokemon" />
          </div>
        )}
      </div>
      <Link to={"/"}>
        <button className="button">VOLTAR PARA HOME</button>
      </Link>
    </div>
  );
}

export default Random;
