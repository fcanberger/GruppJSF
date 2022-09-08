import { Link } from "react-router-dom";
import OhNo from "../../assets/OhNo.png";

export const ErrorBooking = () => {
  return (
    <div className="not-found-container">
      <div className="imgContainer">
        <img className="OhNo" src={OhNo} alt="Logo" />
      </div>
      <div className="textContainer">
        <h2>Något gick fel med din bokning</h2>
        <Link to="/booking">Tillbaka till bokningssidan</Link>
      </div>
    </div>
  );
};
