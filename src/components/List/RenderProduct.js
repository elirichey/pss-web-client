import Link from "next/link";
import Image from "next/image";

export default function RenderProduct(props) {
  const {
    id,
    altId,
    name,
    manufacturer,
    type,
    categories,
    images,
    showImages,
    description,
    attributes,
    price,
    showPrice,
  } = props.item;

  const att = JSON.parse(attributes);
  const { size, attribute } = att;
  const image = images ? JSON.parse(images)[0] : null;
  const categoriesArray = categories ? JSON.parse(categories).categories : [];

  const imgSrc = image ? image : "/image/placeholders/no-image.jpg";

  return (
    <li className="list-product-item">
      <Link href={`/product/${id}`}>
        <div className="image-container">
          <Image src={imgSrc} layout="fill" objectFit="contain" />
        </div>

        <div className="text-container">
          <span className="product-name">
            <span>{name}</span>
          </span>
          <span className="product-manufacturer">{manufacturer}</span>
          <span className="product-type">{type}</span>
        </div>
      </Link>
    </li>
  );
}
