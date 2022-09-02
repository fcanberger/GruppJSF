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
import { Link } from "react-router-dom";

export const Reservation = () => {
  const [adminRes, setAdminRes] = useState<IAdminRes[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRes, setCurrentRes] = useState<IAdminRes>({
    _id: "",
    AOP: "",
    date: "",
    time: 0,
    customerName: "",
    customerEmail: "",
    customerNumber: "",
  });

  //const reservetionObject = useContext(AdminResContext);

  useEffect(() => {
    if (adminRes.length !== 0) return;
    axios.get<IAdminRes[]>("http://localhost:8000/show").then((response) => {
      console.log(response.data);

      setAdminRes(response.data);
    });
  });
  function handleEditInputChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentRes({ ...currentRes, [e.target.name]: e.target.value });
  }

  function handleEditForm(e: FormEvent) {
    e.preventDefault();

    handleEdit(currentRes._id, currentRes);
  }

  function handleEdit(id: any, updateRes: any) {
    const updatedRes = adminRes.map((singleRes) => {
      return singleRes._id === id ? updateRes : singleRes;
    });
    setIsEditing(false);

    setAdminRes(updatedRes);
  }

  function handleEditClick(adminRes: any) {
    setIsEditing(true);
    setCurrentRes({ ...adminRes });
  }

  function saveEdit(e: any) {
    console.log(currentRes._id);
    e.preventDefault();

    axios.post("http://localhost:8000/edit/" + currentRes._id, {
      AOP: currentRes.AOP,
      date: currentRes.date,
      time: currentRes.time,
    });
    setIsEditing(false);
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

                    <Link to="/edit">
                      {" "}
                      <button
                        className="btn"
                        //onClick={() => handleEditClick(singleRes)}
                      >
                        Redigera bokning
                      </button>
                    </Link>
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
