import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <p>Telefon: 08 - 12 34 56</p>
      <p>Epost: info@buonamascella.se</p>
      <p>Adress: Gott käk 10, Stockholm</p>
      <div className="media-icons-container">
        <a href="http://www.facebook.com">
          <img
            className="media-icon"
            src={facebook}
            alt="tomato pasta"
            width={30}
          />
        </a>
        <a href="http://instagram.com">
          <img
            className="media-icon"
            src={instagram}
            alt="tomato pasta"
            width={30}
          />
        </a>
      </div>
      <Link to="/admin" className="admin">
        Logga in som personal
      </Link>

      <p>Copyright 2022 | buona mascella</p>
    </footer>
  );
};
