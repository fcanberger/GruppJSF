import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICustomers } from "../../models/ICustomers";
import DatePicker from "sassy-datepicker";
import { IReservations } from "../../models/IReservations";
import { Link, useNavigate } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { IAdminRes } from "../../models/IAdminRes";

export const Booking = () => {
  // STATES
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [bookingForm, setBookingForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState("");
  const [bookingInfoCustomer, setBookingInfoCustomer] = useState<ICustomers>({
    name: "",
    number: "",
    email: "",
  });
  const [errors, setErrors] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [GDPR, setGDPR] = useState(false);
  const [itsFullMsg, setItsFullMsg] = useState("");
  //USENAVIGATE
  const navigate = useNavigate();

  // IF DATE, TIME, AMOUNT IS CHOOSEN
  useEffect(() => {
    if (date && time && amount) {
      checkAvailable();
    }
  }, [date, amount, time]);

  // DATEPICKER - CHECK IF DATE HAS BEEN PASSED OR SET CHOOSEN DATE
  const onChange = (newDate: Date) => {
    var today = new Date(new Date().toString().substring(0, 15));
    console.log(newDate);
    if (newDate < today === false) {
      setDateError(false);
      setErrorMsg("");
      setDate(newDate);
      setShowTime(true);
    } else {
      const text = "Datumet du valt har redan passerat";
      setDateError(true);
      setErrorMsg(text);
      setShowTime(false);
      setBookingForm(false);
    }
  };

  //GET BOOKINGS AND CHECK AVAILABLE
  const checkAvailable = () => {
    axios
      .get("http://localhost:8000/availability")
      .then((response) => {
        const currentDate = new Date(date).toLocaleDateString();
        console.log("current date:", currentDate);
        // COMPARE BOOKINGS - MAKE A NEW ARRAY WITH BOOKINGS MATCHING CURRENT DATE & TIME
        const compareDateAndTime = response.data.filter(
          (booking: { date: string; time: string }) => {
            return (
              currentDate === booking.date.split("T")[0] &&
              time === booking.time
            );
          }
        );
        console.log("compare date and time", compareDateAndTime);

        // IF THERE IS LESS OR 15 RESERVATIONS
        if (compareDateAndTime.length <= 15) {
          setErrors(false);
          setBookingForm(true);
        } else {
          const text = "Det är tyvärr fullt, pröva en annan tid eller datum";
          setErrors(true);
          setItsFullMsg(text);
          setBookingForm(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // HANDLE RADIOBUTTON - SET TIME
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const choosenTime = e.target.value;
    setTime(choosenTime);
  };

  // HANDLE/SET AMOUNT OF PEOPLE STATE
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const amountNumber = parseInt(e.target.value);
    setAmount(amountNumber);
    checkAvailable();
  };

  // SET GDPR CHECKBOX
  const handleGDPR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGDPR((prevCheck) => !prevCheck);
  };

  // SET INPUT BOOKINGINFORMATION  STATE
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "number") {
      setBookingInfoCustomer({
        ...bookingInfoCustomer,
        [e.target.name]: +e.target.value,
      });
    } else {
      setBookingInfoCustomer({
        ...bookingInfoCustomer,
        [e.target.name]: e.target.value,
      });
    }
  };

  // HANDLE SUBMIT AND VALIDATION - ERROR MSG
  const handleSubmit = () => {
    if (bookingInfoCustomer.name === "") {
      const text = "Fyll i namn";
      setErrors(true);
      setErrorMsg(text);
      return;
    } else {
      setErrors(false);
    }
    if (bookingInfoCustomer.number.length !== 10) {
      const text = "Telefonnummret måste innehålla 10 siffror";
      setErrors(true);
      setErrorMsg(text);
      return;
    } else {
      setErrors(false);
    }
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const EmailIsValid = bookingInfoCustomer.email
      .toLowerCase()
      .match(validRegex);

    if (EmailIsValid) {
    } else {
      const text = "Du måste fylla i en giltlig epost";
      setErrors(true);
      setErrorMsg(text);
      return;
    }
    if (GDPR == !true) {
      const text =
        "Du måste godkänna att vi får spara dina uppgifter i syfta att kunna hantera din bokning";
      setErrors(true);
      setErrorMsg(text);
      return;
    }
    setShowTime(false);
    setBookingForm(false);
    createBooking();
  };

  // CREATE NEW BOOKING - AXIOS.POST
  const createBooking = () => {
    // registered customer
    const newBooking: IReservations = {
      customerName: bookingInfoCustomer.name,
      customerNumber: bookingInfoCustomer.number,
      customerEmail: bookingInfoCustomer.email,
      date: date.toLocaleDateString(),
      time: time,
      AOP: amount,
    };
    axios
      .post<IAdminRes>("http://localhost:8000/booking", newBooking)
      .then((response) => {
        navigate("/thanks/" + response.data._id, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        <Link to="/error-booking"></Link>;
      });
  };

  // HANDLE CANCEL BTN
  const handleCancel = () => {
    setShowTime(false);
    setBookingForm(false);
  };

  // TIME AND AMOUNT INPUTS
  const TimeAndAmount = () => (
    <div id="results" className="time-results">
      <input
        type="radio"
        id="1800"
        name="time"
        value="1800"
        checked={time == "1800"}
        onChange={handleTime}
      ></input>
       <label>18:00</label>
      <br></br>
      <input
        type="radio"
        id="2100"
        name="time"
        value="2100"
        checked={time == "2100"}
        onChange={handleTime}
      ></input>
      <label>21:00</label>
      <br></br>
      <label>Antal</label>
      <select
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmount}
        required
      >
        <option defaultValue={0}></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <br></br>
    </div>
  );

  // RETURN
  return (
    <div className="mainBooking">
      <h2>Välj det datum du önskar besöka oss</h2>
      <div className="datePicker">
        <DatePicker
          onChange={onChange}
          value={date}
          options={{ weekStartsFrom: "Monday" }}
        />
      </div>
      <br></br>
      {dateError && errorMsg ? (
        <div className="error-msg">
          <p>{errorMsg}</p>
        </div>
      ) : (
        ""
      )}
      {showTime ? <TimeAndAmount /> : null}

      {bookingForm ? (
        <div className="bookings">
          <br></br>
          <input
            type="text"
            name="name"
            value={bookingInfoCustomer.name}
            onChange={handleInputChange}
            placeholder="NAMN*"
            required
          ></input>

          <br></br>

          <input
            type="text"
            name="number"
            placeholder="TELEFONNUMMER*"
            value={bookingInfoCustomer.number}
            onChange={handleInputChange}
            required
          ></input>
          <br></br>

          <input
            type="text"
            name="email"
            placeholder="EPOST*"
            value={bookingInfoCustomer.email}
            onChange={handleInputChange}
            required
          ></input>
          <br></br>
          <div className="gdpr-container">
            <input
              type="checkbox"
              id="gdpr"
              name="gdpr"
              value="check"
              onChange={handleGDPR}
            ></input>
             
            <label className="gdpr">
              Du godkänner att vi enligt GDPR får spara dina uppgiter i syfte
              att kunna hantera din bokning
            </label>
          </div>
          <br></br>
          {errors && errorMsg ? (
            <div className="error-msg">
              <p>{errorMsg}</p>
            </div>
          ) : (
            ""
          )}

          <button className="btn-submit" onClick={handleSubmit}>
            Bekräfta
          </button>
          <button className="btn-submit" onClick={handleCancel}>
            Avbryt
          </button>
        </div>
      ) : null}
      {errors && itsFullMsg ? (
        <div className="error-msg">
          <p>{itsFullMsg}</p>
        </div>
      ) : (
        ""
      )}
      <hr></hr>
    </div>
  );
};
