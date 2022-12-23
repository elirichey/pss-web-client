import RenderProduct from "./RenderProduct";

export default function ListProducts(props) {
  const { products } = props;

  return (
    <div id="list-products">
      <ul>
        {products && products.length > 0
          ? products.map((item, i) => <RenderProduct item={item} key={i} />)
          : "No Products"}
      </ul>
    </div>
  );
}
