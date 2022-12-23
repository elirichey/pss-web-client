import Link from "next/link";
import Image from "next/image";
import FooterMenuLinks from "./data/FooterMenuLinks";

export default function Footer(props) {
  const year = new Date().getFullYear();

  const { productCategories } = FooterMenuLinks;
  const half = Math.ceil(productCategories.length / 2);
  const firstHalf = productCategories.slice(0, half);
  const secondHalf = productCategories.slice(-half);

  return (
    <footer>
      <div id="footer-main">
        <div className="container-md row">
          <div className="column hide-desktop">
            <span className="footer-title">Product Categories</span>
            <ul>
              {productCategories.map((item, i) => {
                const { category, url } = item;
                return (
                  <li key={i}>
                    <Link href={url}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="column hide-mobile">
            <span className="footer-title">Product Categories</span>
            <ul>
              {firstHalf.map((item, i) => {
                const { category, url } = item;
                return (
                  <li key={i}>
                    <Link href={url}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="column hide-mobile">
            <span className="footer-title"></span>
            <ul>
              {secondHalf.map((item, i) => {
                const { category, url } = item;
                return (
                  <li key={i}>
                    <Link href={url}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="column">
            <span className="footer-title">Address</span>
            <a
              href="https://www.google.com/maps/place/8501+Bash+St+%23100,+Indianapolis,+IN+46250/@39.9105076,-86.0488755,17z/data=!3m1!4b1!4m5!3m4!1s0x886b4cd39629f345:0x2965d19dd95c9ee8!8m2!3d39.9105076!4d-86.0466868"
              target="_blank"
            >
              <ul>
                <li>8501 Bash St, STE 100</li>
                <li>Indianapolis, IN 46250</li>
              </ul>
            </a>
          </div>

          <div className="column">
            <span className="footer-title">Contact</span>
            <ul>
              <li>
                <a href="tel:(317)288-5150">Phone: (317) 288-5150</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <div className="container row text-center">
          <div id="footer-logo" className="column">
            <Link href="/">
              <Image src="/svg/logo-text-white.svg" height={33} width={120} />
            </Link>
          </div>

          <div id="footer-copyright" className="column text-center px-15">
            © {year} Passive Security Solutions
            <br />
            All rights reserved.
          </div>

          <div id="footer-social" className="column">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="social-icon"
            >
              <Image src="/svg/social/facebook.svg" height={24} width={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
