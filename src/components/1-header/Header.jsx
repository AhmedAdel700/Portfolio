import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [rotate, setRotate] = useState(false);
  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }
  function rotateIcon() {
    setRotate((prev) => !prev);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  }

  return (
    <header className="flex">
      <button
        className="show-menu icon-menu flex"
        onClick={toggleMenu}
      ></button>
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li className="resume">
            <Link
              to="https://drive.google.com/uc?export=download&id=1PU0fcaduH_leykXR0E0e5a2NJsfb7wuO"
              download="Ahmed-Adel-Resume.pdf"
            >
              Download Resume
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={rotateIcon}
        className={rotate ? "mode rotate flex" : "mode flex"}
      >
        <span className="icon-moon-o"></span>
      </button>
      {showMenu && (
        <div className="fixed">
          <div className="menu">
            <ul>
              <li>
                <button className="icon-remove" onClick={toggleMenu}></button>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/">Home</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="contact">Contact</Link>
              </li>
              <li className="resume">
                <Link
                  to="https://drive.google.com/uc?export=download&id=1PU0fcaduH_leykXR0E0e5a2NJsfb7wuO"
                  download="Ahmed-Adel-Resume.pdf"
                >
                  Download Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
