import { Link } from "react-router-dom";
import { Home } from "./Home";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>Vi kunde inte hitta sidan</h2>
      <Link to="/">Tillbaka till startsidan</Link>
    </div>
  );
};
