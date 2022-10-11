import { useState } from "react";
import Card from "../Card";
import "./style.css";

function ProductsList({ setCartProducts, cartProducts, rendered }) {
  const [amount, setAmount] = useState(1);

  return (
    <ul className="products-card-list">
      {rendered.length === 0 ? (
        <h1>Sem produtos renderizados</h1>
      ) : (
        rendered.map((product, index) => (
          <Card
            key={index}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            amount={amount}
            setAmount={setAmount}
          />
        ))
      )}
    </ul>
  );
}

export default ProductsList;
