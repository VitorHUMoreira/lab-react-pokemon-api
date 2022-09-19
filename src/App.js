import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import AllPokemon from "./Pages/AllPokemon";
import Random from "./Pages/Random";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Error />} />

        <Route path="/pokemon" element={<AllPokemon />} />

        <Route path="/pokemon/random" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
