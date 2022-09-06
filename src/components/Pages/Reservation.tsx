import axios from "axios";
import { useEffect, useState } from "react";
import blackLogo from "../../assets/blackLogo.png";
import { IAdminRes } from "../../models/IAdminRes";
import guestIcon from "../../assets/guestIcon.png";
import clock_icon from "../../assets/clock_icon.png";
import calender_icon from "../../assets/calender_icon.png";
import mailIcon from "../../assets/mailIcon.png";
import name_icon from "../../assets/name_icon.png";
import id_icon from "../../assets/id_icon.png";

import { Link } from "react-router-dom";

export const Reservation = () => {
  const [adminRes, setAdminRes] = useState<IAdminRes[]>([]);

  useEffect(() => {
    if (adminRes.length !== 0) return;
    axios.get<IAdminRes[]>("http://localhost:8000/show").then((response) => {
      console.log(response.data);

      setAdminRes(response.data);
    });
  }, []);

  function handleDelete(e: any) {
    e.preventDefault();
    const id = e.target.value;

    axios.delete("http://localhost:8000/delete/" + id).then((response) => {
      console.log("REMOVED", response);
      //set reservetions - set new res in front end that shows when res.id deleted
      setAdminRes([...adminRes.filter((b) => b._id !== id)]);
    });
  }

  return (
    <>
      <div className="main-reservations">
        <h1>Bokningar</h1>
        <img className="blackLogo" src={blackLogo} alt="Logo" width={150} />

        <div className="reservationSection">
          {adminRes.map((singleRes) => {
            return (
              <div className="theReservetions" key={singleRes._id}>
                <p className="customerName">
                  <img className="guestName" src={name_icon} alt="nameIcon" />
                  {singleRes.customerName}{" "}
                </p>
                <p className="customerId">
                  <img className="guestId" src={id_icon} alt="nameIcon" /> +46
                  {singleRes.customerNumber}
                </p>
                <p className="numberOfPeople">
                  <img className="guestIcon" src={guestIcon} alt="guestIcon" />
                  {singleRes.AOP} personer
                </p>

                <p className="time">
                  <img className="clockIcon" src={clock_icon} alt="clockIcon" />
                  {singleRes.time}
                </p>
                <p className="date">
                  <img
                    className="dateIcon"
                    src={calender_icon}
                    alt="guestIcon"
                  />
                  {singleRes.date.split("T")[0]}
                </p>
                <p className="customerEmail">
                  <img className="emailIcon" src={mailIcon} alt="guestIcon" />
                  {singleRes.customerEmail}
                </p>
                <div className="buttonSection">
                  <button
                    value={singleRes._id}
                    className="btn"
                    onClick={handleDelete}
                    type="button"
                  >
                    Ta bort bokning
                  </button>
                  <Link to={"/Edit/" + singleRes._id}>
                    <button className="btn">Redigera bokning</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
