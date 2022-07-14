import DesktopMainMenu from "./components/DesktopMainMenu";
import MobileMainMenu from "./components/MobileMainMenu";

export default function Header(props) {
  const { alt } = props;

  return (
    <section id="header" className="column">
      <div id="header-top-Bar">
        <div className="container row">TopBar</div>
      </div>

      <div id="header-body">
        <div className="container row">
          <div id={alt ? "fleet-logo" : "header-logo"}>
            <a>
              {alt ? (
                <img src="/image/logo-fleet.png" />
              ) : (
                <img src="/image/logo-main.png" />
              )}
            </a>
          </div>

          <DesktopMainMenu />
          <MobileMainMenu />
        </div>
      </div>
    </section>
  );
}
