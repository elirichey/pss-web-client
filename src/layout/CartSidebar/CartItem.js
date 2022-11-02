import Link from "next/link";
import Image from "next/image";
import { formatToDollars } from "../../utilities/conversions/format-currency";

export default function CartItem(props) {
  const { item, removeCartItem } = props;
  const { id, quantity, product } = item;
  const { images, manufacturer, name, price, showImages, showPrice } = product;

  const placeholderImg = "/image/placeholders/no-image.jpg";
  const image = images ? JSON.parse(images)[0] : null;
  const imgSrc = image ? image : placeholderImg;

  return (
    <li className="cart-item-container">
      <div className="cart-product-image">
        <Image
          src={showImages ? imgSrc : placeholderImg}
          layout="fill"
          objectFit="contain"
          placeholder={placeholderImg}
        />
      </div>

      <div className="column justify-center">
        <div className="title">{name}</div>

        <p className="price">
          <b>PRICE:</b> {formatToDollars(price)}
        </p>

        <p className="quantity">
          <b>QTY:</b> {quantity}
        </p>
      </div>

      <div className="cart-item-actions">
        <a className="edit" href={`/product/${id}`}>
          EDIT
        </a>
        <div className="remove" onClick={() => removeCartItem(id)}>
          REMOVE
        </div>
      </div>
    </li>
  );
}
