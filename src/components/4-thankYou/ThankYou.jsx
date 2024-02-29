import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/Animation - 1709211560290.json";
import { Link } from "react-router-dom";
import "./thankYou.css";
export default function ThankYou() {
  return (
    <section className="thanks-you-message">
      <Lottie loop={false} animationData={doneAnimation} className="done-animation"/>
      <h1>The Form Has Been Submitted Successfully</h1>
      <h2>Thank You For Your Interest !</h2>
      <Link to="/">Back To Home Page</Link>
    </section>
  );
}
