import { Link } from "react-router-dom";
import whiteLogo from "../../assets/whiteLogo.png";
// import hero from "../../assets/hero.jpg";
// import tomatopasta from "../../assets/tomatopasta.jpg";
// import pizzaleft from "../../assets/pizzaleft.jpg";
// import one from "../../assets/one.jpg";
// import pastacheese from "../../assets/pastacheese.jpg";

export const Home = () => {
  return (
    <>
      <div className="hero-image"></div>
      <div className="spaceSection"></div>
      <div className="wrapper-home">
        {/* <img src={hero} alt="hero image" height={200} width={500} /> */}
        <div className="booking-container">
          <h2 className="Welcome-text">Välkommen till </h2>
          <img className="white-logo" src={whiteLogo} alt="Logo" width={370} />
          {/* <div className="white-logo"></div> */}

          <div className="text-div-booking">
            <p>
              Varmt välkomna att boka bord hoss oss via vår bokningsida som ni
              hittar via knappen nedan
            </p>
            <p>
              Vill ni boka bord för fler än 6 personer, vänligen kontakta oss.
            </p>
            <p>
              Behöver ni avboka ser vi gärna att ni gör det innan 15.00 samma
              dag.
            </p>
          </div>
          <div className="btn-booking">
            <Link to="/booking">Boka bord</Link>
          </div>
        </div>
        <div className="four-images-container">
          {/* <div className="image-wrapper-mobile">
            <div className="image-one"></div>
            <div className="image-two"></div>
          </div>
          <div className="image-wrapper-mobile">
            <div className="image-three"></div>
            <div className="image-four"></div>
          </div> */}
          <div className="image-wrapper">
            <div className="image-one"></div>
            <div className="image-two"></div>
            <div className="image-three"></div>
            <div className="image-four"></div>
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
          {/* <div className="opening-image-container"></div> */}
        </div>

        <div className="meny-container">
          <div className="meny-images-container">
            <div className="image-six"></div>
            <div className="image-seven"></div>
          </div>
          <p>Vi erbjuder er det bästa käket från det italienska köket</p>
          <div className="btn-meny">
            <Link to="/meny">Meny</Link>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};
