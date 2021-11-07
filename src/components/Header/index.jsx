import { useState } from "react";
import "./header.css";
function Header({ showProducts }) {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <h2>
        Burger <small>Kenzie</small>{" "}
      </h2>
      <div className="Pesquisa">
        <input
          type="text"
          placeholder="pesquisar"
          onChange={(event) => {
            setInput(event.target.value);
            showProducts(input);
          }}
        ></input>
        {console.log(input)}
        <button
          onClick={() => {
            showProducts(input);
          }}
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}
export default Header;
