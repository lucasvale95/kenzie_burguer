import { useEffect } from "react";
import "./style.css";
function Card({
  id,
  name,
  category,
  price,
  img,
  setCartProducts,
  cartProducts,
  amount,
}) {
  useEffect(() => {
    setCartProducts(cartProducts);
  }, [cartProducts, setCartProducts]);

  function addProduct() {
    const newProduct = {
      id,
      name,
      category,
      price,
      img,
      amount,
    };

    const filters = cartProducts.find((product) => product.id === id);
    const newPrevious = cartProducts.filter((product) => product !== filters);

    filters && (filters.amount += 1);

    filters === undefined
      ? setCartProducts((previous) => [...previous, newProduct])
      : setCartProducts([filters, ...newPrevious]);
  }

  return (
    <li className="card" key={id}>
      <div className="div-img">
        <img className="image" src={img} alt="" />
      </div>
      <div className="div-info">
        <h3 className="title">{name}</h3>
        <p className="category">{category}</p>
        <p className="price">R$ {price}</p>
        <button className="btnAdd" onClick={addProduct}>
          {" "}
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default Card;
