import Footer from "../../components/3-footer/Footer";
import Lottie from "lottie-react";
import homeAnimation from "../../../public/animations/Animation - 1709228982734.json";
import MUI from "../../../public/images/MUI.png";

import "./home.css";
export default function Home() {
  return (
    <>
      <section className="home-page flex">
        <div className="left-section">
          <div className="avatar flex">
            <img src="./AA-modified.png" alt="My-Pic" /> 
            <span className="icon-verified"></span>
          </div>
          <h1 className="title">
            <span>Ahmed </span>
            <span>Adel</span>
          </h1>

          <p>
            Web Developer <span>|</span> Front-End Developer <span>| </span>
            React.js Developer
          </p>
          <div className="skills">
            <div className="my-skills">
              <ul>
                <li className="icon-html51"></li>
                <li className="icon-css31"></li>
                <li className="icon-javascript"></li>
                <li className="icon-sass"></li>
                <li className="icon-bootstrap"></li>
                <li>
                  <img className="mui" src={MUI} alt="MUI" />
                </li>
                <li className="icon-postman"></li>
                <li className="icon-react"></li>
                <li className="icon-redux"></li>
                <li className="icon-git1"></li>
                <li className="icon-github2"></li>
                <li className="icon-figma"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-section">
          <Lottie animationData={homeAnimation} className="home-animation" />
        </div>
      </section>
      <Footer />
    </>
  );
}
