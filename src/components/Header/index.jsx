import { useState } from "react";
import "./style.css";

function Header({ products, setRendered }) {
  const [search, setSearch] = useState("");

  function filterProduct(event) {
    event.preventDefault();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    search ? setRendered(filtered) : setRendered(products);
  }

  return (
    <>
      <div className="head">
        <div className="div-logo">
          <img className="logo-img" src="./kenzie.svg" alt="" />
        </div>
        <form className="div-input">
          <input
            className="input"
            type="text"
            placeholder="Digitar pesquisa"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="btn-search" type="button" onClick={filterProduct}>
            Pesquisar
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
