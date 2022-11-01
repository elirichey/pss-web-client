import { useState, useEffect } from "react";
import CartSidebar from "../../CartSidebar/CartSidebar";

export default function TopBar(props) {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const updateCartCount = () => {
    const cartItems = localStorage.getItem("cartItems");
    const count = cartItems ? JSON.parse(cartItems).length : 0;
    setCartCount(count);
  };

  return (
    <div id="header-top-Bar">
      <div className="container row">
        <div className="column"></div>
        <div className="column"></div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="show-cart-btn"
        >
          CART {cartCount > 0 ? `( ${cartCount} )` : null}
        </button>
      </div>

      {showCart ? <CartSidebar setShowCart={setShowCart} /> : null}
    </div>
  );
}
