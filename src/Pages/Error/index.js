import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Error</h1>
      <h2>PÁGINA NÃO ENCONTRADA</h2>
      <Link to={"/"}>
        <button>VOLTAR PARA HOME</button>
      </Link>
    </div>
  );
}

export default Error;
