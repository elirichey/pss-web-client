import Image from "next/image";
import { Form } from "react-final-form";
import Number from "../../components/Forms/Number";
import { mustBeGreaterOrEqualToZero } from "../../utilities/validation";
import { formatToDollars } from "../../utilities/conversions/format-currency";
import { useEffect, useState } from "react";

export default function Product(props) {
  const { product } = props;

  const {
    attributes,
    categories,
    description,
    id,
    images,
    manufacturer,
    name,
    price,
    showImages,
    showPrice,
    type,
  } = product;

  const placeholderImg = "/image/placeholders/no-image.jpg";
  const image = images ? JSON.parse(images)[0] : null;
  const imgSrc = image ? image : placeholderImg;

  const attribute = JSON.parse(attributes)["attribute"];
  const size = JSON.parse(attributes)["size"];
  const cats = categories ? JSON.parse(categories)["categories"] : [];

  const [initialQuantity, setInitialQuantity] = useState("0");

  useEffect(() => {
    setValueOnLoad();
    isIncludedInCart();
    window.addEventListener("storage", isIncludedInCart);
    return () => window.removeEventListener("storage", isIncludedInCart);
  }, []);

  const setValueOnLoad = () => {
    if (typeof window !== "undefined") {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (cartItems) {
        const productIncluded = cartItems.some((x) => x.id === product.id);
        if (productIncluded) {
          const value = cartItems.find((x) => x.id === product.id);
          setInitialQuantity(value.quantity);
        }
      }
    }
  };

  const addToCart = (vals) => {
    const { quantity } = vals;
    const addProduct = { id: product.id, quantity, product };

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let newCart = [];

    if (cartItems && cartItems.length > 0) {
      const productIncluded = cartItems.some((x) => x.id === product.id);

      if (productIncluded) {
        const noUpdates = cartItems.some(
          (x) => x.id === product.id && x.quantity === quantity
        );

        if (noUpdates) return;
        else {
          if (quantity > 0) {
            cartItems.map((x) => {
              if (x.id !== product.id) newCart.push(x);
            });
            newCart.push(addProduct);
          } else {
            cartItems.map((x) => {
              if (x.id !== product.id) newCart.push(x);
            });
          }
        }
      } else {
        if (quantity > 0) {
          cartItems.map((x) => newCart.push(x));
          newCart.push(addProduct);
        } else return;
      }
    } else {
      if (quantity > 0) newCart.push(addProduct);
      else return;
    }
    if (newCart !== cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));
    } else return;
  };

  const removeCartItem = (id, form) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const productIncluded = cartItems.some((x) => x.id === id);

    if (productIncluded) {
      let newCart = [];
      cartItems.map((x) => (x.id !== id ? newCart.push(x) : null));
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      window.dispatchEvent(new Event("storage"));
    }

    form.reset();
    setInitialQuantity("0");
  };

  const [includedInArt, setIncludedInCart] = useState(false);
  const isIncludedInCart = () => {
    if (typeof window !== "undefined") {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const productIncluded = cartItems && cartItems.some((x) => x.id === id);
      if (productIncluded) return setIncludedInCart(true);
      else return setIncludedInCart(false);
    }
  };

  return (
    <div className="container-md mb-30">
      <div className="column pb-15">
        <div className="row">
          <p>Breadcrumbs</p>
        </div>

        <div className="row product-body">
          <div className="product-image">
            <Image
              src={showImages ? imgSrc : placeholderImg}
              layout="fill"
              objectFit="contain"
              placeholder={placeholderImg}
            />
          </div>

          <div className="product-overview column">
            <div className="row">
              <h1 className="title">{name}</h1>
            </div>

            {showPrice ? (
              <div className="row mt-15 price-container">
                <div className="add-to-cart-container">
                  <Form
                    onSubmit={addToCart}
                    initialValues={{ quantity: initialQuantity }}
                    render={({
                      handleSubmit,
                      form,
                      submitting,
                      pristine,
                      values,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <p className="price">{formatToDollars(price)}</p>

                          <Number
                            name="quantity"
                            label="Quantity *"
                            placeholder="0"
                            validate={mustBeGreaterOrEqualToZero}
                            type="number"
                            step="1"
                            min="0"
                            max="10"
                            required={true}
                            disabled={false}
                          />
                        </div>

                        <div className="submit-container">
                          <button
                            className={
                              submitting
                                ? "add-to-cart-btn disabled"
                                : "add-to-cart-btn"
                            }
                            type="submit"
                            disabled={submitting}
                          >
                            Add to Quote
                          </button>

                          {includedInArt ? (
                            <div
                              className="remove-from-cart-btn"
                              onClick={() => removeCartItem(id, form)}
                            >
                              Remove
                            </div>
                          ) : null}
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
            ) : null}

            {manufacturer ? (
              <div className="row my-15 pt-15">
                <p className="attribute manufacturer">
                  <b className="opacity-50">MANUFACTURER:</b> {manufacturer}
                </p>
              </div>
            ) : null}

            <div className="row my-15">
              <div className="column">
                <p className="normal opacity-50">
                  <b>OVERVIEW:</b>
                </p>
                <p className="description">{description}</p>
              </div>
            </div>

            {type || attribute || size ? (
              <div className="row my-15">
                <div className="column">
                  <ul className="list-attributes">
                    {type ? (
                      <li className="attribute">
                        <b className="opacity-50">PRODUCT TYPE:</b> {type}
                      </li>
                    ) : null}

                    {attribute ? (
                      <li className="attribute">
                        <b className="opacity-50">ATTRIBUTE:</b> {attribute}
                      </li>
                    ) : null}
                    {size ? (
                      <li className="attribute">
                        <b className="opacity-50">SIZE:</b> {size}
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            ) : null}

            {cats.length > 0 ? (
              <div className="row mt-15">
                <div className="column">
                  <p className="normal opacity-50">
                    <b>CATEGORIES:</b>
                  </p>
                  <ul className="list-categories">
                    {cats.map((category, i) => {
                      return (
                        <li key={i}>
                          <p className="category">{category}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
