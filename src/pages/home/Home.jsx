import Footer from "../../components/3-footer/Footer";
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
      </div>
      {/* <div className="right-section">Right</div> */}
      <Footer />
    </section>
  );
}
