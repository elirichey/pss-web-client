import CartItem from "./CartItem";

export default function CartSidebar(props) {
  const { setShowCart } = props;
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

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
            ? cartItems.map((item, i) => <CartItem item={item} key={i} />)
            : "No Items In Cart"}
        </ul>
      </div>
    </div>
  );
}
