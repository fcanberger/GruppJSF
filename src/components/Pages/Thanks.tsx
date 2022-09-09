import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAdminRes } from "../../models/IAdminRes";
import blackLogo from "../../assets/blackLogo.png";
export const Thanks = () => {
  const [adminRes, setAdminRes] = useState<IAdminRes[]>([]);

  const [booking, setBooking] = useState<IAdminRes>({
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
      .get<IAdminRes[]>(`http://localhost:8000/thanks/${params.id}`)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (params.id === response.data[i]._id) {
            setBooking(response.data[i]);
          }
        }
        setAdminRes(response.data);
      });
  }, [params]);

  return (
    <div className="mainThanksSection">
      <div className="buttonSection">
        <Link className="editBackBtn" to={"/"}>
          Tillbaka till start
        </Link>
      </div>

      <div className="mainThanksContent">
        <img src={blackLogo} alt="Logo" width={300} />
        <h3 className="titleText-first">
          Tack för din bokning {booking.customerName}
        </h3>
        <p className="textContent">Ordernr: {booking._id}</p>
        <p className="textContent">
          Vi har skickat en bekräftelse till {booking.customerEmail}. <br />{" "}
          Kontrollera så bokningen inte hamnar i din skräppost.
        </p>
        <div className="bookingInfo">
          <h4 className="titleText-second">Du har bokat:</h4>
          <p className="bookingText">
            {booking.AOP} gäster, den {booking.date.split("T")[0]}, klockan{" "}
            {booking.time}
          </p>
        </div>
      </div>
    </div>
  );
};
