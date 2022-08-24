import { useState } from "react";
import blackLogo from "../../assets/blackLogo.png";

export const Reservation = () => {
  const [reservation, setReservation] = useState([]);
  const [newReservation, setNewReservation] = useState("");

  const addReservation = async (reservation: string) => {
    const postOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    };
  };

  const handleReservation = () => {};

  const deleteReservation = () => {};

  return (
    <>
      <div className="main-reservations">
        <h1>Bokningar</h1>
        <img src={blackLogo} alt="Logo" width={150} />
        <div>
          <h4>Här ska bokningarna synas.</h4>
          <p>För att sen kunna uppdateras, raderas</p>
        </div>
      </div>
    </>
  );
};
