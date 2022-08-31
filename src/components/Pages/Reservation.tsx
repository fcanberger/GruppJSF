import axios from "axios";
import { useContext, useEffect, useState } from "react";
import blackLogo from "../../assets/blackLogo.png";
import { IAdminRes } from "../../models/IAdminRes";
import guestIcon from "../../assets/guestIcon.png";
import clock_icon from "../../assets/clock_icon.png";
import calender_icon from "../../assets/calender_icon.png";
import mailIcon from "../../assets/mailIcon.png";
import name_icon from "../../assets/name_icon.png";
import id_icon from "../../assets/id_icon.png";
import { DeleteReservation } from "../DeleteReservation";
import { AdminResContext } from "../../contexts/ReservationContext";

export const Reservation = () => {
  const [adminRes, setAdminRes] = useState<IAdminRes[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRes, setCurrentRes] = useState({});

  const reservetionObject = useContext(AdminResContext);

  useEffect(() => {
    if (adminRes.length !== 0) return;
    axios.get("http://localhost:8000/show").then((response) => {
      setAdminRes(response.data);
    });
  });

  console.log(adminRes);

  function handleEditInputChange(e: any) {
    setCurrentRes({ ...currentRes, text: e.target.value });
    reservetionObject.handleEditInputChange(parseInt(adminRes.id));
    console.log(currentRes);
  }

  function handleEditForm(e: any) {
    e.preventdefault();

    handleEdit(currentRes.id, currentRes);
  }

  function handleEdit(id: any, updateRes: any) {
    const updatedRes = adminRes.map((adminRes) => {
      return adminRes.id === id ? updateRes : adminRes;
    });
    setIsEditing(false);

    setAdminRes(updatedRes);
    console.log("You clicked on edit");
  }

  function handleEditClick(adminRes: any) {
    setIsEditing(true);

    setCurrentRes({ ...adminRes });
  }
  return (
    <>
      <div className="main-reservations">
        <h1>Bokningar</h1>
        <img className="blackLogo" src={blackLogo} alt="Logo" width={150} />

        {isEditing ? (
          <form onSubmit={handleEditForm}>
            <h2>Redigera bokning</h2>
            <label htmlFor="editReservetion">Redigera bokning: </label>

            <input
              name="editReservetion"
              type="text"
              placeholder="Redigera bokning"
              onChange={handleEditInputChange}
            />
            {/* ska vara efter text i input value={currentRes.text} */}
            <button type="submit">Ändra</button>
            <button onClick={() => setIsEditing(false)}>Tillbaka</button>
          </form>
        ) : (
          <div className="reservationSection">
            {adminRes.map((adminRes) => {
              return (
                <div className="theReservetions" key={adminRes.id}>
                  <p className="customerName">
                    <img className="guestName" src={name_icon} alt="nameIcon" />
                    {adminRes.customerName}{" "}
                  </p>
                  <p className="customerId">
                    <img className="guestId" src={id_icon} alt="nameIcon" />{" "}
                    {adminRes.customerNumber}
                  </p>
                  <p className="numberOfPeople">
                    <img
                      className="guestIcon"
                      src={guestIcon}
                      alt="guestIcon"
                    />
                    {adminRes.AOP} personer
                  </p>

                  <p className="time">
                    <img
                      className="clockIcon"
                      src={clock_icon}
                      alt="clockIcon"
                    />
                    {adminRes.time}
                  </p>
                  <p className="date">
                    <img
                      className="dateIcon"
                      src={calender_icon}
                      alt="guestIcon"
                    />
                    {adminRes.date}
                  </p>
                  <p className="customerEmail">
                    <img className="emailIcon" src={mailIcon} alt="guestIcon" />
                    {adminRes.customerEmail}
                  </p>
                  <div className="buttonSection">
                    <DeleteReservation></DeleteReservation>
                    <button
                      className="btn"
                      onClick={() => handleEditClick(adminRes)}
                    >
                      Redigera bokning
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
