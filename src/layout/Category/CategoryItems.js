import ProductItem from "../../components/Product/ProductItem";

export default function BumpersPage(props) {
  const { products } = props;

  // Filter products to make sure name, category, productUrl, and more are not empty string
  // This is a catch for when rows are not properly formatted in the Google Sheet
  const filteredProducts = products.filter((product) => {
    return product.name?.trim() !== "" && product.category?.trim() !== "" && product.productUrl?.trim() !== "";
  });

  return (
    <div id="category-overview">
      <ul className="category-product-list">
        {filteredProducts && filteredProducts.length > 0 ? filteredProducts.map((product) => (
          <li>
            <ProductItem item={product} />
          </li>
        )) : "No products found"}
      </ul>
    </div>
  );
}
