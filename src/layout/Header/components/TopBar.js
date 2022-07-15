import { useState } from "react";
import CartSidebar from "../../CartSidebar/CartSidebar";

export default function TopBar(props) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div id="header-top-Bar">
      <div className="container row">
        <div className="column"></div>
        <div className="column"></div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="show-cart-btn"
        >
          CART
        </button>
      </div>

      {showCart ? <CartSidebar setShowCart={setShowCart} /> : null}
    </div>
  );
}
