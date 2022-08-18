import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="wrapper-home">
      <div className="booking-container">
        <p>Varmt välkomna att boka bord hoss oss på Buona mascella.</p>
        <p>Vill ni boka bord för fler än 6 personer, vänligen kontakta oss.</p>
        <p>
          Behöver ni avboka ser vi gärna att ni gör det innan 15.00 samma dag.
        </p>
        <div className="btn-booking">
          <Link to="/booking">Boka bord</Link>
        </div>
      </div>
      <div className="four-images-container">
        <p>HÄR SKA DET VARA 4 BILDER</p>
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
    </div>
  );
};
