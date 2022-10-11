import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CartList from "./components/CartList";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [rendered, setRendered] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setRendered(products);
  }, [products]);

  return (
    <div className="">
      <header className="homepage-header">
        <Header
          products={products}
          setProducts={setProducts}
          rendered={rendered}
          setRendered={setRendered}
        />
      </header>
      <main className="homepage-main">
        <ProductsList
          products={products}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
          rendered={rendered}
          setRendered={setRendered}
        />
        <CartList
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          rendered={rendered}
          setRendered={setRendered}
        />
      </main>
    </div>
  );
}

export default App;
