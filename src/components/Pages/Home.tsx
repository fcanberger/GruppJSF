import { Link } from "react-router-dom";
import whiteLogo from "../../assets/whiteLogo.png";

export const Home = () => {
  return (
    <>
      <div className="hero-image"></div>
      <div className="spaceSection"></div>
      <div className="wrapper-home">
        <div className="booking-container">
          <h2 className="Welcome-text">Välkommen till </h2>
          <img className="white-logo" src={whiteLogo} alt="Logo" width={370} />
          <div className="text-div-booking">
            <b>Boka bord hos oss</b>
            <p>
              Vi är en äkta italiensk restaurang med allt vad det innebär. Den
              italienska stämningen finns där, likt kärleken till maten och
              matlagningskonsten.
            </p>
            <p>
              Till oss kommer alla sorters människor som alla vill samma sak –
              att äta fantastiska italienska rätter och dryck, men samtidigt få
              umgås med familj och vänner på italienskt vis med mycket skratt
              och glädje.
            </p>
            <p>
              Förutom sittplatser inomhus har vi även en mysig uteservering. Med
              anledning av det inte så förutsägbara vädret går platserna{" "}
              <b>utomhus </b>
              inte att förboka.
            </p>
          </div>
          <div className="btn-booking btn-animation">
            <Link to="/booking">Boka bord</Link>
          </div>
        </div>
        <div className="four-images-container">
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
        </div>

        <div className="meny-container">
          <div className="meny-images-container">
            <div className="image-six"></div>
            <div className="image-seven"></div>
          </div>
          <div className="meny-text-wrapper">
            <p>Vi erbjuder er det bästa käket från det italienska köket.</p>
            <p>
              Maten bygger på enkelhet, kvalitet och tradition. Vår färska pasta
              är egentillverkad på farmors vis och alla våra rätter tillagas med
              hållbara råvaror från småskaliga och större italienska och svenska
              producenter.
            </p>
            <p>
              Långsiktighet är något vi förespråkar konstant. Vi anser att det
              inte spelar någon roll om råvarorna är av högsta kvalité om inte
              den tillagas med passion och kärlek.
            </p>
          </div>
          <div className="btn-meny btn-animation">
            <Link to="/meny">Meny</Link>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};
