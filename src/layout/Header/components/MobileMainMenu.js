import { useState, useEffect, useRef } from "react";
import MainMenuLinks from "../data/MainMenuLinks";
import Link from "next/link";
import Image from "next/image";

export default function MobileMainMenu(props) {
  // Click detection
  const clickRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { current } = clickRef;
      if (current && !current.contains(e.target)) {
        setShowMenu(false);
        setShowSubPolice(false);
        setShowSubFireEMT(false);
        setShowSubFleet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickRef]);

  const [showMenu, setShowMenu] = useState(false);

  // Main Categories
  const [showSubPolice, setShowSubPolice] = useState(false);
  const [showSubFireEMT, setShowSubFireEMT] = useState(false);
  const [showSubFleet, setShowSubFleet] = useState(false);
  const toggleSubMenu = (type) => {
    if (type === "police") {
      setShowSubPolice(!showSubPolice);
      showSubFireEMT ? setShowSubFireEMT(false) : null;
      showSubFleet ? setShowSubFleet(false) : null;
    }
    if (type === "fire_ems") {
      showSubPolice ? setShowSubPolice(false) : null;
      setShowSubFireEMT(!showSubFireEMT);
      showSubFleet ? setShowSubFleet(false) : null;
    }
    if (type === "fleet") {
      showSubPolice ? setShowSubPolice(false) : null;
      showSubFireEMT ? setShowSubFireEMT(false) : null;
      setShowSubFleet(!showSubFleet);
    }
  };

  return (
    <div ref={clickRef} id="mobile-main-menu" className="flex">
      <span
        className="mobile-menu-indicator"
        onClick={() => {
          setShowMenu(!showMenu);
          showSubPolice ? setShowSubPolice(false) : null;
          setShowSubFireEMT ? setShowSubFireEMT(false) : null;
          setShowSubFireEMT ? setShowSubFleet(false) : null;
        }}
      >
        {showMenu ? (
          <div className="close">
            <Image src="/image/close.svg" height={44} width={44} />
          </div>
        ) : (
          <div className="open">
            <Image src="/image/mobile-menu.svg" height={44} width={44} />
          </div>
        )}
      </span>

      {/* MainMenuLinks */}
      {showMenu ? (
        <div id="mobile-menu-dropdown">
          <ul className="mobile-menu-dropdown-container">
            <li>
              <Link href="/" legacyBehavior>
                <a className="mobile-menu-primary">Home</a>
              </Link>
            </li>

            {/*
            <li>
              <span
                className={
                  showSubPolice
                    ? "mobile-menu-primary open"
                    : "mobile-menu-primary"
                }
                onClick={() => toggleSubMenu("police")}
              >
                Police
                <span
                  className={
                    showSubPolice
                      ? "mobile-menu-dropdown-indicator open"
                      : "mobile-menu-dropdown-indicator"
                  }
                >
                  »
                </span>
              </span>

              {showSubPolice ? (
                <ul>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Police List</a>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>

            <li>
              <span
                className={
                  showSubFireEMT
                    ? "mobile-menu-primary open"
                    : "mobile-menu-primary"
                }
                onClick={() => toggleSubMenu("fire_ems")}
              >
                Fire/EMS
                <span
                  className={
                    showSubFireEMT
                      ? "mobile-menu-dropdown-indicator open"
                      : "mobile-menu-dropdown-indicator"
                  }
                >
                  »
                </span>
              </span>

              {showSubFireEMT ? (
                <ul>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fire/EMS List</a>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>

            <li>
              <span
                className={
                  showSubFleet
                    ? "mobile-menu-primary open"
                    : "mobile-menu-primary"
                }
                onClick={() => toggleSubMenu("fleet")}
              >
                Fleet
                <span
                  className={
                    showSubFleet
                      ? "mobile-menu-dropdown-indicator open"
                      : "mobile-menu-dropdown-indicator"
                  }
                >
                  »
                </span>
              </span>

              {showSubFleet ? (
                <ul>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="mobile-menu-secondary">Fleet List</a>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            */}

            <li>
              <Link href="/products" legacyBehavior>
                <a className="mobile-menu-primary">Products</a>
              </Link>
            </li>

            <li>
              <Link href="/contact" legacyBehavior>
                <a className="mobile-menu-primary">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
