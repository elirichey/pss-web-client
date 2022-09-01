import RenderProduct from "./RenderProduct";

export default function ListProducts(props) {
  const { products } = props;

  return (
    <div id="list-products">
      <ul>
        {products.map((item, i) => (
          <RenderProduct item={item} key={i} />
        ))}
      </ul>
    </div>
  );
}
