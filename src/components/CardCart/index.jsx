import "./style.css";

function CardCart({ name, category, img, index, removeItem, price, amount }) {
  return (
    <>
      <li className="card-cart" key={index}>
        <div className="div-cart-img">
          <img className="div-cart-image" src={img} alt="" />
        </div>
        <div className="div-cart-info">
          <h3 className="div-cart-title">{name}</h3>
          <p className="div-cart-category">{category}</p>
        </div>
        <div className="quantify">
          <p className="quantify-text"> {amount}</p>
        </div>
        <div className="div-cart-remove">
          <button
            className="div-cart-btn"
            id={index}
            onClick={(e) => removeItem(e.target.id)}
          >
            Remover
          </button>
          <p className="div-cart-price">R$ {(amount * price).toFixed(2)}</p>
        </div>
      </li>
    </>
  );
}

export default CardCart;
