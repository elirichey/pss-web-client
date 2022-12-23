import Link from "next/link";
import MainMenuLinks from "../../data/MainMenuLinks";

export default function FleetMegaMenu(props) {
  const { refProp } = props;
  const { fleet } = MainMenuLinks;

  return (
    <div id="mega-menu-fleet" className="mega-menu" ref={refProp}>
      <div className="flex row">
        <div className="flex column">
          <span className="title">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>

          <span className="title pt-15">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>
        </div>

        <div className="flex column">
          <span className="title">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>
          <span className="title pt-15">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>
        </div>

        <div className="flex column">
          <span className="title">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>
          <span className="title pt-15">Fleet_Category</span>
          <ul>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
            <li>
              <Link href="/products">List Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
