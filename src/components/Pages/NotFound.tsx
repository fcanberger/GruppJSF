import { Link } from "react-router-dom";
import OhNo from "../../assets/OhNo.png";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="imgContainer">
        <img className="OhNo" src={OhNo} alt="Logo" />
      </div>
      <div className="textContainer">
        <h2>Vi kunde inte hitta sidan</h2>
        <Link to="/">Tillbaka till startsidan</Link>
      </div>
    </div>
  );
};
