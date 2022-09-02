import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
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
  const [currentRes, setCurrentRes] = useState<IAdminRes>({
    id: 0,
    AOP: "",
    date: "",
    time: 0,
    customerName: "",
    customerEmail: "",
    customerNumber: "",
  });

  const reservetionObject = useContext(AdminResContext);

  useEffect(() => {
    if (adminRes.length !== 0) return;
    axios.get<IAdminRes[]>("http://localhost:8000/show").then((response) => {
      setAdminRes(response.data);
    });
  });

  console.log(adminRes);

  function handleEditInputChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentRes({ ...currentRes, [e.target.name]: e.target.value });
    //reservetionObject.handleEditInputChange(adminRes.id);
  }

  function handleEditForm(e: FormEvent) {
    e.preventDefault();

    handleEdit(currentRes.id, currentRes);
  }

  function handleEdit(id: any, updateRes: any) {
    const updatedRes = adminRes.map((singleRes) => {
      return singleRes.id === id ? updateRes : singleRes;
    });
    setIsEditing(false);

    setAdminRes(updatedRes);
    console.log("You clicked on edit");
  }

  function handleEditClick(adminRes: any) {
    setIsEditing(true);

    setCurrentRes({ ...adminRes });
  }

  console.log(currentRes);
  return (
    <>
      <div className="main-reservations">
        <h1>Bokningar</h1>
        <img className="blackLogo" src={blackLogo} alt="Logo" width={150} />

        {isEditing ? (
          <form onSubmit={handleEditForm}>
            <h2>Redigera bokning för {currentRes.customerName}</h2>
            <label htmlFor="editReservetion">Redigera bokning: </label>

            <input
              id="editReservation"
              type="text"
              name="AOP"
              value={currentRes.AOP}
              onChange={handleEditInputChange}
            />
            <input
              id="editReservation"
              type="text"
              name="time"
              value={currentRes.time}
              onChange={handleEditInputChange}
            />
            <input
              id="editReservation"
              type="text"
              name="date"
              value={currentRes.date}
              onChange={handleEditInputChange}
            />

            <button type="submit">Ändra</button>
            <button onClick={() => setIsEditing(false)}>Tillbaka</button>
          </form>
        ) : (
          <div className="reservationSection">
            {adminRes.map((singleRes) => {
              return (
                <div className="theReservetions" key={singleRes.id}>
                  <p className="customerName">
                    <img className="guestName" src={name_icon} alt="nameIcon" />
                    {singleRes.customerName}{" "}
                  </p>
                  <p className="customerId">
                    <img className="guestId" src={id_icon} alt="nameIcon" />{" "}
                    {singleRes.customerNumber}
                  </p>
                  <p className="numberOfPeople">
                    <img
                      className="guestIcon"
                      src={guestIcon}
                      alt="guestIcon"
                    />
                    {singleRes.AOP} personer
                  </p>

                  <p className="time">
                    <img
                      className="clockIcon"
                      src={clock_icon}
                      alt="clockIcon"
                    />
                    {singleRes.time}
                  </p>
                  <p className="date">
                    <img
                      className="dateIcon"
                      src={calender_icon}
                      alt="guestIcon"
                    />
                    {singleRes.date}
                  </p>
                  <p className="customerEmail">
                    <img className="emailIcon" src={mailIcon} alt="guestIcon" />
                    {singleRes.customerEmail}
                  </p>
                  <div className="buttonSection">
                    <DeleteReservation></DeleteReservation>
                    <button
                      className="btn"
                      onClick={() => handleEditClick(singleRes)}
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
