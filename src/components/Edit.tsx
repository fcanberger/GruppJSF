import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { IAdminRes } from "../models/IAdminRes";
import { Reservation } from "./Pages/Reservation";

export const Edit = () => {
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

  //Edit reservetions Inputs
  function handleEditInputChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "number") {
      setCurrentRes({ ...currentRes, [e.target.name]: +e.target.value });
    } else {
      setCurrentRes({ ...currentRes, [e.target.name]: +e.target.value });
    }
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
      <div className="mainEditSection">
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
          <div className="editButtonSection">
            <button className="editBtn" type="submit" onClick={saveEdit}>
              <Link className="editLink" to={"/Reservation"}>
                Ändra
              </Link>
            </button>
            <button className="editBackBtn">
              <Link className="editLink" to={"/Reservation"}>
                Tillbaka
              </Link>
            </button>
          </div>
        </form>

        <div>
          <p>
            Skulle det uppstå några problem, kontakta närmaste chef eller shift
            ansvarig
          </p>
        </div>
      </div>
    </>
  );
};
