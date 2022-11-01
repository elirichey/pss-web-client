import Image from "next/image";

export default function CartItem(props) {
  console.log("Props:", props.item);
  const { id, quantity, product } = props.item;
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
          <b>PRICE:</b> ${price}
        </p>

        <p className="quantity">
          <b>QTY:</b> {quantity}
        </p>
      </div>

      <div className="cart-item-actions">
        <div className="edit">EDIT</div>
        <div className="remove">REMOVE</div>
      </div>
    </li>
  );
}
