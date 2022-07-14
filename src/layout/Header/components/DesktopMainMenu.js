import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PoliceMegaMenu from "./megamenus/PoliceMegaMenu";
import FireEMSMegaMenu from "./megamenus/FireEMSMegaMenu";
import FleetMegaMenu from "./megamenus/FleetMegaMenu";

export default function DesktopMainMenu(props) {
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

  const [showPolice, setShowPolice] = useState(false);
  const [showFireEMT, setShowFireEMT] = useState(false);
  const [showFleet, setShowFleet] = useState(false);

  return (
    <div id="desktop-main-menu" className="flex">
      <ul className="flex row">
        <li>
          <span className="menu-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </span>
        </li>

        <li>
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

        <li>
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

        <li>
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

        <li>
          <span className="menu-item">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
}
