import Link from "next/link";
import MainMenuLinks from "../../data/MainMenuLinks";

export default function FireEMSMegaMenu(props) {
  const { refProp } = props;
  const { fire_ems } = MainMenuLinks;

  return (
    <div id="mega-menu-fire-ems" className="mega-menu" ref={refProp}>
      <div className="flex row">
        <div className="flex column">
          <span className="title">Fire_EMS_Category</span>
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

          <span className="title pt-15">Fire_EMS_Category</span>
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
          <span className="title">Fire_EMS_Category</span>
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
          <span className="title pt-15">Fire_EMS_Category</span>
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
          <span className="title">Fire_EMS_Category</span>
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
          <span className="title pt-15">Fire_EMS_Category</span>
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
