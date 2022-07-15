export default function HeaderLogo(props) {
  const { alt } = props;

  return (
    <div id={alt ? "fleet-logo" : "header-logo"}>
      <a>
        {alt ? (
          <img src="/image/logo-fleet.png" />
        ) : (
          <img src="/image/logo-main.png" />
        )}
      </a>
    </div>
  );
}
