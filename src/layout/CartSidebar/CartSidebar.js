export default function CartSidebar(props) {
  const { setShowCart } = props;

  return (
    <div id="cart-sidebar">
      <span className="cart-sidebar-void" onClick={() => setShowCart(false)} />
      <div className="cart-sidebar-body">
        <button className="close-cart" onClick={() => setShowCart(false)}>
          CLOSE
        </button>
        This is the cart
      </div>
    </div>
  );
}
