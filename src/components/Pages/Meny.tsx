import menyRestaurant from "../../assets/menyRestaurant.png";
import dessertMeny from "../../assets/dessertMeny.png";
export const Meny = () => {
  return (
    <div className="menuContainer">
      <div>
        <img src={menyRestaurant} alt="menu" width={800} />
      </div>
      <div>
        <img src={dessertMeny} alt="menu" width={800} />
      </div>
    </div>
  );
};
