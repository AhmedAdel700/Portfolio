import { useEffect, useState } from "react";
import "./upButton.css";
export default function UpButton() {
  const [showUp, setUpShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setUpShow(true);
      } else setUpShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  function scrollTOTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {showUp && (
        <button onClick={scrollTOTop} className="up">
          Up
        </button>
      )}
    </>
  );
}
