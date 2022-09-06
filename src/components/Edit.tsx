import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAdminRes } from "../models/IAdminRes";

export const Edit = () => {
  const [adminRes, setAdminRes] = useState<IAdminRes[]>([]);
  const [edit, setEdit] = useState(false);
  const [currentRes, setCurrentRes] = useState<IAdminRes>({
    _id: "",
    AOP: "",
    date: "",
    time: 0,
    customerName: "",
    customerEmail: "",
    customerNumber: "",
  });

  let params = useParams();

  useEffect(() => {
    axios
      .get<IAdminRes[]>(`http://localhost:8000/show/${currentRes._id}`)
      .then((response) => {
        console.log("response data: ", response.data);

        for (let i = 0; i < response.data.length; i++) {
          if (params.id === response.data[i]._id) {
            console.log("parmas id matchar med response id");
            setCurrentRes(response.data[i]);
          }
        }
        setAdminRes(response.data);
      });
  }, [params]);

  useEffect(() => {
    console.log(
      currentRes.date,
      currentRes.customerName,
      currentRes.customerEmail
    );
  });

  function handleEditForm(e: FormEvent) {
    e.preventDefault();

    handleEdit(currentRes._id, currentRes);
  }

  function handleEdit(id: any, updateRes: any) {
    const updatedRes = adminRes.map((singleRes) => {
      return singleRes._id === id ? updateRes : singleRes;
    });
    setEdit(false);

    setAdminRes(updatedRes);
  }

  //Edit reservetions Inputs
  function handleEditInputChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentRes({ ...currentRes, [e.target.name]: e.target.value });
  }

  function handleEditClick(adminRes: any) {
    setEdit(true);
    setCurrentRes({ ...adminRes, adminRes });
  }

  function saveEdit(e: any) {
    console.log(currentRes._id);
    e.preventDefault();

    axios.put("http://localhost:8000/edit/" + currentRes._id, {
      AOP: currentRes.AOP,
      date: currentRes.date,
      time: currentRes.time,
    });
    console.log(currentRes.AOP, currentRes.date);
    setEdit(false);
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
            value={currentRes.date.split("T")[0]}
            onChange={handleEditInputChange}
          />
          <div className="editButtonSection">
            <button className="editBtn" type="submit" onClick={saveEdit}>
              <Link className="editLink" to={"/Reservation"}>
                Ändra
              </Link>
            </button>
            <button className="editBackBtn">
              <Link
                className="editLink"
                to={"/Reservation"}
                onClick={handleEditClick}
              >
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