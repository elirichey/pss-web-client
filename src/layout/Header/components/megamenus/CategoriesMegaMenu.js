import Link from "next/link";

export default function CategoriesMegaMenu(props) {
  const { refProp } = props;

  return (
    <div id="mega-menu-categories" className="mega-menu" ref={refProp}>
      <div className="flex row">
        <div className="flex column">
          <ul>
            <li>
              <Link href="/category/mounts">Computer Mounts</Link>
            </li>
            <li>
              <Link href="/category/consoles">Equipment Consoles</Link>
            </li>
            <li>
              <Link href="/category/k9">K9 Transport</Link>
            </li>
            <li>
              <Link href="/category/lights">Emergency Warning Lights</Link>
            </li>
            <li>
              <Link href="/category/bumpers">Push Bumpers</Link>
            </li>
            <li>
              <Link href="/category/speed">Speed Measurement</Link>
            </li>
          </ul>
        </div>       
      </div>
    </div>
  );
}
