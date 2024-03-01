import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const storedTheme = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(storedTheme || "dark");
  const [showMenu, setShowMenu] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    if (theme === "dark") {
      document.body.classList.remove(theme);
      setTheme("light");
    } else {
      document.body.classList.remove(theme);
      setTheme("dark");
    }
  }

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function rotateIcon() {
    setRotate((prev) => !prev);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  }

  function handleTheme() {
    toggleTheme();
    rotateIcon();
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
              to="https://drive.google.com/file/d/12TKZyfgi4EGk7OSV3tLxvHj7VAfr1l0Q/view?usp=drive_link"
              download="Ahmed-Adel-Resume.pdf"
            >
              Download Resume
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleTheme}
        className={rotate ? "mode rotate flex" : "mode flex"}
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {showMenu && (
        <div className="fixed">
          <div className="menu">
            <ul>
              <li>
                <button className="icon-remove" onClick={toggleMenu}></button>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="contact">
                  Contact
                </Link>
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
