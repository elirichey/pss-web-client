import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import PoliceMegaMenu from "./megamenus/PoliceMegaMenu";
// import FireEMSMegaMenu from "./megamenus/FireEMSMegaMenu";
// import FleetMegaMenu from "./megamenus/FleetMegaMenu";
import CategoriesMegaMenu from "./megamenus/CategoriesMegaMenu";

export default function DesktopMainMenu(props) {
  const clickCategoriesRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { current } = clickCategoriesRef;
      if (current && !current.contains(e.target)) {
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickCategoriesRef]);

  /*
  const clickPoliceRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { current } = clickPoliceRef;
      if (current && !current.contains(e.target)) {
        setShowPolice(false);
        setShowFireEMT(false);
        setShowFleet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickPoliceRef]);

  const clickFireEMSRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { current } = clickFireEMSRef;
      if (current && !current.contains(e.target)) {
        setShowPolice(false);
        setShowFireEMT(false);
        setShowFleet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickFireEMSRef]);

  const clickFleetRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const { current } = clickFleetRef;
      if (current && !current.contains(e.target)) {
        setShowPolice(false);
        setShowFireEMT(false);
        setShowFleet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickFleetRef]);
  */

  const [showPolice, setShowPolice] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showFireEMT, setShowFireEMT] = useState(false);
  const [showFleet, setShowFleet] = useState(false);

  return (
    <div id="desktop-main-menu" className="flex">
      <ul className="flex row">
        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Home</Link>
          </span>
        </li>

      {/*
        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Computer Mounts</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Equipment Consoles</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">K9 Transport</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Emergency Warning Lights</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Push Bumpers</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/">Speed Measurement</Link>
          </span>
        </li>
        */}

        {/* <li className="desktop-main-menu-link">
          <span
            className={showCategories ? "menu-item open" : "menu-item"}
            onClick={() => {
              setShowCategories(!showCategories);
              // showPolice ? setShowPolice(false) : null;
              // showFireEMT ? setShowFireEMT(false) : null;
              // showFleet ? setShowFleet(false) : null;
            }}
          >
            Categories
            <span
              className={
                showCategories
                  ? "megamenu-dropdown-indicator open"
                  : "megamenu-dropdown-indicator"
              }
            >
              »
            </span>
          </span>

          {showCategories ? <CategoriesMegaMenu refProp={clickCategoriesRef} /> : null}
        </li> */}


        {/*
        <li className="desktop-main-menu-link">
          <span
            className="menu-item"
            onClick={() => {
              setShowPolice(!showPolice);
              showFireEMT ? setShowFireEMT(false) : null;
              showFleet ? setShowFleet(false) : null;
            }}
          >
            Police
            <span
              className={
                showPolice
                  ? "megamenu-dropdown-indicator open"
                  : "megamenu-dropdown-indicator"
              }
            >
              »
            </span>
          </span>

          {showPolice ? <PoliceMegaMenu refProp={clickPoliceRef} /> : null}
        </li>

        <li className="desktop-main-menu-link">
          <span
            className="menu-item"
            onClick={() => {
              showPolice ? setShowPolice(false) : null;
              setShowFireEMT(!showFireEMT);
              showFleet ? setShowFleet(false) : null;
            }}
          >
            Fire/EMS
            <span
              className={
                showFireEMT
                  ? "megamenu-dropdown-indicator open"
                  : "megamenu-dropdown-indicator"
              }
            >
              »
            </span>
          </span>
          {showFireEMT ? <FireEMSMegaMenu refProp={clickFireEMSRef} /> : null}
        </li>

        <li className="desktop-main-menu-link">
          <span
            className="menu-item"
            onClick={() => {
              showPolice ? setShowPolice(false) : null;
              showFireEMT ? setShowFireEMT(false) : null;
              setShowFleet(!showFleet);
            }}
          >
            Fleet
            <span
              className={
                showFleet
                  ? "megamenu-dropdown-indicator open"
                  : "megamenu-dropdown-indicator"
              }
            >
              »
            </span>
          </span>
          {showFleet ? <FleetMegaMenu refProp={clickFleetRef} /> : null}
        </li>
        */}

        {/*<li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/products">Products</Link>
          </span>
        </li>*/}

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/fleet">Fleet</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/contact">Contact</Link>
          </span>
        </li>

        <li className="desktop-main-menu-link">
          <span className="menu-item">
            <Link href="/about">About</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}
