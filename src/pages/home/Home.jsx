import Footer from "../../components/3-footer/Footer";
import Lottie from "lottie-react";
import homeAnimation from "../../../public/animations/Animation - 1709228982734.json";
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
          <h1 className="title">Hi And Welcome To My Personal Website</h1>
          <h3 className="name">
            My Name Is Ahmed Adel And I am A Web Developer
          </h3>
          <p>
            Web Developer <span>|</span> Front-End Developer <span>| </span>
            React.js Developer
          </p>
          <div className="skills">
            <h3>Skills And Technologies</h3>
            <div className="my-skills">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Postman</li>
                <li>React.js</li>
                <li>Vite Js</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>Redux ToolKit</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Figma</li>
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
