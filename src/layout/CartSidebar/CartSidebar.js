import CartItem from "./CartItem";
import { formatToDollars } from "../../utilities/conversions/format-currency";

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

  const calculateEstimatedTotal = () => {
    let total = 0;
    cartItems.map((x) => {
      const { product, quantity } = x;
      const { price } = product;
      const itemTotal = price * quantity;
      total = total + itemTotal;
    });

    return formatToDollars(total);
  };

  return (
    <div id="cart-sidebar">
      <span className="cart-sidebar-void" onClick={() => setShowCart(false)} />
      <div className="cart-sidebar-body">
        <button className="close-cart" onClick={() => setShowCart(false)}>
          CLOSE
        </button>

        <h4 className="cart-title mt-0">QUOTE GENERATOR</h4>

        <ul>
          {cartItems && cartItems.length > 0 ? (
            cartItems
              .sort((a, b) => {
                if (a.product.name < b.product.name) return -1;
                if (a.product.name > b.product.name) return 1;
                return 0;
              })
              .map((item, i) => (
                <CartItem item={item} key={i} removeCartItem={removeCartItem} />
              ))
          ) : (
            <div className="empty-cart-container pt-15">
              <p className="empty-cart-txt mb-15">No Items</p>
            </div>
          )}
        </ul>

        {cartItems && cartItems.length > 0 ? (
          <div className="cart-summary">
            <div className="row mb-15">
              <p className="quote-est-total">
                <b>Estimated Total:</b> {calculateEstimatedTotal()}
              </p>
            </div>

            <div className="row">
              <button className="complete-quote-btn">Request Quote</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
