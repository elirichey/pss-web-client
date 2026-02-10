import ProductItem from "../../components/Product/ProductItem";

export default function MountsPage(props) {
  const { products } = props;

  return (
    <div id="category-overview">
      <ul className="category-product-list">
        {products && products.length > 0 ? products.map((product) => (
          <li>
            <ProductItem item={product} />
          </li>
        )) : "No products found"}
      </ul>
    </div>
  );
}
