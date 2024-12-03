export default function Hero(props) {
  const { id, title } = props;
  return (
    <div id={id} className="hero">
      {title ? (
        <div className="container">
          <h1>{title}</h1>
        </div>
      ) : null}
    </div>
  );
}
