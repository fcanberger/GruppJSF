import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import tomatopasta from "../../assets/tomatopasta.jpg";
import pizzaleft from "../../assets/pizzaleft.jpg";
import tomatos from "../../assets/tomatos.jpg";
import pastacheese from "../../assets/pastacheese.jpg";

export const Home = () => {
  return (
    <>
      <div className="hero-image"></div>
      <div className="wrapper-home">
        {/* <img src={hero} alt="hero image" height={200} width={500} /> */}
        <div className="booking-container">
          <p>Varmt välkomna att boka bord hoss oss på Buona mascella.</p>
          <p>
            Vill ni boka bord för fler än 6 personer, vänligen kontakta oss.
          </p>
          <p>
            Behöver ni avboka ser vi gärna att ni gör det innan 15.00 samma dag.
          </p>
          <div className="btn-booking">
            <Link to="/booking">Boka bord</Link>
          </div>
        </div>
        <div className="four-images-container">
          <div className="image-one">
            <img
              className="tomatopasta"
              src={tomatopasta}
              alt="tomato pasta"
              width={200}
            />
          </div>
          <div className="image-two">
            <img
              className="tomatopasta"
              src={pizzaleft}
              alt="pizza"
              width={200}
            />
          </div>
          <div className="image-three">
            <img
              className="tomatopasta"
              src={tomatos}
              alt="tomatos"
              width={200}
            />
          </div>
          <div className="image-four">
            <img
              className="tomatopasta"
              src={pastacheese}
              alt="cheese"
              width={200}
            />
          </div>
        </div>
        <div className="opening-hours-container">
          <div className="opening-info">
            <h4>Öppettider</h4>
            <p>Mån - Tor: 11.00 - 23.00</p>
            <p>Fredag: 12.00 - 01.00</p>
            <p>Lördag: 12.00 - 01.00</p>
            <p>Söndag: 12.00 - 23.00</p>
          </div>
        </div>

        <div className="opening-image-container">
          <p>BILD</p>
        </div>
        <div className="meny-container">
          <div className="meny-images-container">
            <p>BILD</p>
            <p>BILD</p>
          </div>
          <p>Vi erbjuder er det bästa käket från det italienska köket</p>
          <div className="btn-meny">
            <Link to="/meny">Meny</Link>
          </div>
          <hr></hr>
          <footer>
            <p>Telefon: 08 - 12 34 56</p>
            <p>Epost: info@buonamascella.se</p>
            <p>Adress: Gott käk 10, Stockholm</p>
            <div className="media-icons-container">
              <p>Facebook icon</p>
              <p>Instagram icon</p>
            </div>
            <p>Link to Admin login</p>
            <p>Copyright 2022 | buona mascella</p>
          </footer>
        </div>
        <hr></hr>
        <footer>
          <p>Telefon: 08 - 12 34 56</p>
          <p>Epost: info@buonamascella.se</p>
          <p>Adress: Gott käk 10, Stockholm</p>
          <div className="media-icons-container">
            <p>Facebook icon</p>
            <p>Instagram icon</p>
          </div>
          <Link to="/admin">Logga in personal</Link>
          <p>Copyright 2022 | buona mascella</p>
        </footer>
      </div>
    </>
  );
};
