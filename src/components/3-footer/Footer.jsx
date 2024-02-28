import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <Link
          className="icon-linkedin"
          to="https://www.linkedin.com/in/ahmed-adel-232272283/"
          target="_blank"
        ></Link>
        <Link
          className="icon-envelope-o"
          to="mailto:ahmedadel.engineer1@gmail.com"
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
    </footer>
  );
}
