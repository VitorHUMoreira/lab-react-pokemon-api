import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllPokemon() {
  const [loading, setLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchConfigs() {
      try {
        const response = await axios.get("http://localhost:8080/pokemon");
        setAllPokemon(response.data);
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
      <h1 className="title">All Pokemon</h1>
      <Link to={"/"}>
        <button className="button-all">VOLTAR PARA HOME</button>
      </Link>
      <div className="container">
        {!loading &&
          allPokemon.map((pokemon) => {
            return (
              <div key={pokemon.id} className="card">
                <h6>ID: {pokemon.id}</h6>
                <h4 className="name">{pokemon.name}</h4>
                <img src={pokemon.sprite} alt="Pokemon" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllPokemon;
