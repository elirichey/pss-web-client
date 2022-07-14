export default function Footer(props) {
  const {} = props;

  const year = new Date().getFullYear();
  return (
    <footer>
      <div id="footer-main">
        <div className="container row">
          <div className="column">Products1</div>
          <div className="column">Products2</div>
          <div className="column">Address</div>
          <div className="column">Contact</div>
        </div>
      </div>

      <div id="footer-bottom">
        <div className="container row text-center">
          <div id="footer-logo" className="column">
            <a>
              <img src="/image/logo-text-white.svg" />
            </a>
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
              <img src="/image/social/facebook.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
