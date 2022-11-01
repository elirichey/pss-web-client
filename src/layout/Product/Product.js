import Link from "next/link";
import Image from "next/image";
import { formatToDollars } from "../../utilities/conversions/format-currency";

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
                <p className="price">{formatToDollars(price)}</p>

                <div className="add-to-cart-container">
                  <div className="add-to-cart-btn">Add to Cart</div>
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
