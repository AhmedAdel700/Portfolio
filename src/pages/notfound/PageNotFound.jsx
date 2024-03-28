import { Link } from "react-router-dom";
import "./notFound.css";

export default function PageNotFound() {
  return (
    <div className="notFoundPage">
      <h1 className="notFound">The Page You Are Looking For Is Not Found</h1>
      <Link className="back" to={"./"}>
        Back To Home Page
      </Link>
    </div>
  );
}
