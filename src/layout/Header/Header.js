import HeaderLogo from "./components/HeaderLogo";
import DesktopMainMenu from "./components/DesktopMainMenu";
import MobileMainMenu from "./components/MobileMainMenu";
import TopBar from "./components/TopBar";

export default function Header(props) {
  return (
    <section id="header" className="column">
      <TopBar />

      <div id="header-body">
        <div className="container row">
          <HeaderLogo {...props} />
          <DesktopMainMenu />
          <MobileMainMenu />
        </div>
      </div>
    </section>
  );
}
