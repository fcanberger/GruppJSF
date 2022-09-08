import googleMaps from "../../assets/mapsis.png"
export const Contact = () => {
  return (
    <>
    <div className="Contact">
      <div className="contact-container">
        <h2 className="contactus">Kontakta oss</h2>
        <p>Tel: 08 - 12 34 56</p>
        <p>Mail: info@buonamascella.se</p>
        <p>Adress: Gott käk 10, Stockholm</p>

        <h2 className="hittahit">Hitta hit</h2>
        <img
          className="GMaps"
          src={googleMaps}
          alt="Karta"
          width={600}
          />
      </div>
    </div>
    </>
  );
};