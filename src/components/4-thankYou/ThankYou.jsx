import { Link } from "react-router-dom";
import "./thankYou.css";
export default function ThankYou() {
  return (
    <section className="thanks-you-message">
      <h1>The Form Has Been Submitted Successfully</h1>
      <h2>Thank You For Your Interest !</h2>
      <Link to="/">Back To Home Page</Link>
    </section>
  );
}
