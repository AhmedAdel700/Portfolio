import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <section className="home-page flex">
      <div className="left-section">
        <div className="avatar flex">
          <img src="./AA-modified.png" alt="My-Pic" />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title">Hi And Welcome To My Personal Website</h1>
        <h3 className="name">My Name Is Ahmed Adel And I am A Web Developer</h3>
        <p>
          Web Developer <span>|</span> Front-End Developer <span>| </span>
          React.js Developer
        </p>
        <div className="icons">
          <Link
            className="icon-linkedin"
            to="https://www.linkedin.com/in/ahmed-adel-232272283/"
            target="_blank"
          ></Link>
          <Link
            className="icon-envelope-o"
            to="mailto:ahmedadel.enginner1@gmail.com"
            target="_blank"
          ></Link>
          <Link
            className="icon-github"
            to="https://github.com/AhmedAdel700"
            target="_blank"
          ></Link>
          <Link
            className="icon-telegram"
            to="https://telegram.me/Ahmed_Web_Adel"
            target="_blank"
          ></Link>
          <Link
            className="icon-facebook-f"
            to="https://www.facebook.com/profile.php?id=100058786266217&mibextid=ZbWKwL"
            target="_blank"
          ></Link>
        </div>
      </div>
      <div className="right-section">Right</div>
    </section>
  );
}
