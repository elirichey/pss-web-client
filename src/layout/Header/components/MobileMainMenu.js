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
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [showSubPolice, setShowSubPolice] = useState(false);
  const [showSubFireEMT, setShowSubFireEMT] = useState(false);
  const [showSubFleet, setShowSubFleet] = useState(false);
  const toggleSubMenu = (type) => {
    if (type === "categories") {
      setShowSubCategories(!showSubCategories);
      showSubPolice ? setShowSubPolice(false) : null;
      showSubFireEMT ? setShowSubFireEMT(false) : null;
      showSubFleet ? setShowSubFleet(false) : null;
    }
    if (type === "police") {
      setShowSubPolice(!showSubPolice);
      showSubCategories ? setShowSubCategories(false) : null;
      showSubFireEMT ? setShowSubFireEMT(false) : null;
      showSubFleet ? setShowSubFleet(false) : null;
    }
    if (type === "fire_ems") {
      showSubCategories ? setShowSubCategories(false) : null;
      showSubPolice ? setShowSubPolice(false) : null;
      setShowSubFireEMT(!showSubFireEMT);
      showSubFleet ? setShowSubFleet(false) : null;
    }
    if (type === "fleet") {
      showSubCategories ? setShowSubCategories(false) : null;
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

            <li>
              <span
                className={
                  showSubCategories
                    ? "mobile-menu-primary open"
                    : "mobile-menu-primary"
                }
                onClick={() => toggleSubMenu("categories")}
              >
                Categories
                <span
                  className={
                    showSubCategories
                      ? "mobile-menu-dropdown-indicator open"
                      : "mobile-menu-dropdown-indicator"
                  }
                >
                  »
                </span>
              </span>

              {showSubCategories ? (
                <ul>          
                  <li>
                        <Link href="/category/mounts" className="mobile-menu-secondary">Computer Mounts</Link>
                    </li>
                    <li>
                        <Link href="/category/consoles" className="mobile-menu-secondary">Consoles</Link>
                    </li>
                    <li>
                        <Link href="/category/gun-racks" className="mobile-menu-secondary">Gun Racks</Link>
                    </li>
                    <li>
                        <Link href="/category/k9" className="mobile-menu-secondary">K9</Link>
                    </li>
                    <li>
                        <Link href="/category/lights" className="mobile-menu-secondary">Lights</Link>
                    </li>
                    <li>
                        <Link href="/category/transport" className="mobile-menu-secondary">Prisoner Transport</Link>
                    </li>
                    <li>
                        <Link href="/category/bumpers" className="mobile-menu-secondary">Push / PIT Bars</Link>
                    </li>
                    <li>
                        <Link href="/category/speed" className="mobile-menu-secondary">Radar</Link>
                    </li>
                    <li>
                        <Link href="/category/sirens" className="mobile-menu-secondary">Sirens</Link>
                    </li>
                    
                    <li>
                        <Link href="/category/vaults" className="mobile-menu-secondary">Storage Vaults</Link>
                    </li>
                    <li>
                        <Link href="/category/thermal-cameras" className="mobile-menu-secondary">Thermal Cameras</Link>
                    </li>
                      
                </ul>
              ) : null}
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

            {/*<li>
              <Link href="/products" legacyBehavior>
                <a className="mobile-menu-primary">Products</a>
              </Link>
            </li>*/}

            <li>
              <Link href="/fleet" legacyBehavior>
                <a className="mobile-menu-primary">Fleet</a>
              </Link>
            </li>

            <li>
              <Link href="/contact" legacyBehavior>
                <a className="mobile-menu-primary">Contact</a>
              </Link>
            </li>

            <li>
              <Link href="/about" legacyBehavior>
                <a className="mobile-menu-primary">About</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
