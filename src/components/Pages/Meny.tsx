import menyRestaurant from "../../assets/menyRestaurant.png";
import dessertMeny from "../../assets/dessertMeny.png";
export const Meny = () => {
  return (
    <div className="menuContainer">
      <div className="imgSection">
        <img className="menuImg" src={menyRestaurant} alt="menu" />
      </div>
      <div className="imgSection">
        <img className="dessertMenu" src={dessertMeny} alt="menu" />
      </div>
    </div>
  );
};
