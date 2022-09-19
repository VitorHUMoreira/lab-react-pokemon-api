import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/pokemon`}>
        <button className="button">All Pokemon</button>
      </Link>
      <br />
      <Link to={`/pokemon/random`}>
        <button className="button">Random Pokemon</button>
      </Link>
    </div>
  );
}

export default Home;
