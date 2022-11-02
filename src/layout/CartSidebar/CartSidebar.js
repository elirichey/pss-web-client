import CartItem from "./CartItem";

export default function CartSidebar(props) {
  const { setShowCart } = props;
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const removeCartItem = (id) => {
    let newCart = [];
    const productIncluded = cartItems.some((x) => x.id === id);

    if (productIncluded) {
      cartItems.map((x) => (x.id !== id ? newCart.push(x) : null));
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div id="cart-sidebar">
      <span className="cart-sidebar-void" onClick={() => setShowCart(false)} />
      <div className="cart-sidebar-body">
        <button className="close-cart" onClick={() => setShowCart(false)}>
          CLOSE
        </button>

        <h4 className="cart-title mt-0">CART</h4>

        <ul>
          {cartItems && cartItems.length > 0
            ? cartItems.map((item, i) => (
                <CartItem item={item} key={i} removeCartItem={removeCartItem} />
              ))
            : "No Items In Cart"}
        </ul>

        {cartItems && cartItems.length > 0 ? (
          <div className="cart-summary">
            <div>
              <p>Checkout</p>
            </div>

            <div>
              <p>Total: $0.00</p>
            </div>

            <div>
              <p>Total</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
