import { useRouteError } from "react-router-dom";
import "./error.css";
export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>An Error Occurred!</h1>
      <h3>{error.message || "Failed To Get The Data"}</h3>
      <h3>{error.statusText}</h3>
      <h3>{error.status}</h3>
    </div>
  );
}
