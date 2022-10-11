import { useEffect } from "react";
import CardCart from "../CardCart";
import "./style.css";

function CartList({ cartProducts, setCartProducts }) {
  useEffect(() => {
    setCartProducts(cartProducts);
  }, [cartProducts, setCartProducts]);

  function removeItem(indexProduct) {
    const itemRemove = cartProducts.find(
      (product, index) => index === Number(indexProduct)
    );

    const newPrevious = cartProducts.filter(
      (product) => product !== itemRemove
    );
    itemRemove.amount -= 1;

    itemRemove.amount >= 1
      ? setCartProducts([itemRemove, ...newPrevious])
      : setCartProducts([...newPrevious]);
  }

  const balance = cartProducts.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );

  return (
    <>
      <div className="cart">
        <div className="div-title">
          <h2 className="cart-title">Carrinho de compras</h2>
        </div>

        {cartProducts.length > 0 ? (
          <>
            <ul className="cart-list">
              {cartProducts.map((product, index) => {
                return (
                  <CardCart
                    key={index}
                    setCartProducts={setCartProducts}
                    cartProducts={cartProducts}
                    removeItem={removeItem}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    category={product.category}
                    img={product.img}
                    index={index}
                    amount={product.amount}
                  />
                );
              })}
            </ul>
            <div className="div-price">
              <p className="text-price">
                Total
                <span className="total-price"> R$ {balance.toFixed(2)}</span>
              </p>
              <button
                className="btn-removeAll"
                onClick={() => setCartProducts([])}
              >
                Remover todos
              </button>
              <button className="btn-done">Finalizar compra</button>
            </div>
          </>
        ) : (
          <div className="cart-none">
            <h2 className="cart-text-none">Sua sacola está vazia</h2>
            <p className="cart-text-p">Adicione itens</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartList;
