import axios from "axios";
import React, { useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { ICustomers } from "../../models/ICustomers";
import DatePicker from "sassy-datepicker";
import { IReservations } from "../../models/IReservations";
import { timeEnd } from "console";

export const Booking = () => {
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
  const [errorMsg, setErrorMsg] = useState("");
  const [GDPR, setGDPR] = useState(false);

  useEffect(() => {
    if (date && time && amount) {
      // setBookingForm(true);
      checkAvailable();

      console.log("TJOHO", new Date(date).toISOString().split("T")[0]);
    }
  }, [date, amount, time]);
  console.log(GDPR);
  // console.log("UTANFÖR", new Date(date).toISOString().split("T")[0]);

  const onChange = (newDate: Date) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
    setShowTime(true);
  };

  //FETCH BOOKINGS AND CHECK AVALIBE
  const checkAvailable = () => {
    console.log("check avalible");
    axios
      .get("http://localhost:8000/availability")
      .then((response) => {
        const currentDate = new Date(date).toISOString().split("T")[0];
        console.log("tid från DB:", response.data);
        const compareDateAndTime = response.data.filter(
          (booking: { date: string; time: string }) => {
            return (
              currentDate === booking.date.split("T")[0] &&
              time === booking.time
            );
          }
        );
        console.log("matched date and time", compareDateAndTime);

        if (compareDateAndTime.length <= 15) {
          setErrors(false);
          setBookingForm(true);
          console.log("det finns bord");
        } else {
          console.log("det finns inga bord");
          const text = "Det är tyvärr fullt, pröva en annan tid eller datum";
          setErrors(true);
          setErrorMsg(text);
          setBookingForm(false);
        }
        // for (let i = 0; i < response.data.length; i++) {
        //   if (currentDate === response.data[i].date.split("T")[0]) {
        //     console.log(
        //       "samma lika datum",
        //       currentDate + "och" + response.data[i].date.split("T")[0]
        //     );
        //     if (time === response.data[i].time) {
        //       console.log("samma tid:", time, "och", response.data[i].time);
        //       console.log(response);
        //       if (response.data.length >= 15) {
        //         console.log("det är fullt");
        //       } else {
        //         console.log("det finns bord");
        //       }
        //     }
        //   }

        // }
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // HANDLE RADIOBUTTON
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const choosenTime = e.target.value;
    setTime(choosenTime);
  };

  // HANDLE AMOUNT
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const amountNumber = parseInt(e.target.value);
    setAmount(amountNumber);
    checkAvailable();
  };

  const handleGDPR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGDPR((prevCheck) => !prevCheck);
    console.log(GDPR);
  };

  // SET INPUT BOOKING INFORMATION
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

  // HANDLE SUBMIT AND VALIDATION
  const handleSubmit = () => {
    console.log(date);
    console.log("on submit", new Date(date).toISOString().split("T")[0]);

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
      const text = "Du måste godkänna att vi får spara dina uppgifter";
      setErrors(true);
      setErrorMsg(text);
      return;
    }
    console.log("sparar" + date, time, amount, bookingInfoCustomer);
    setShowTime(false);
    setBookingForm(false);
    createBooking();
  };

  // CREATE NEW BOOKING
  const createBooking = () => {
    // registered customer
    const newBooking: IReservations = {
      customerName: bookingInfoCustomer.name,
      customerNumber: bookingInfoCustomer.number,
      customerEmail: bookingInfoCustomer.email,
      date: date,
      time: time,
      AOP: amount,
    };
    axios
      .post("http://localhost:8000/booking", newBooking)
      .then((response) => {
        console.log("axios - response.data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setShowTime(false);
    setBookingForm(false);
  };

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

  return (
    <div className="mainBooking">
      <h1>Här bokar du bord</h1>
      <div className="datePicker">
        <DatePicker
          onChange={onChange}
          value={date}
          options={{ weekStartsFrom: "Monday" }}
        />
      </div>
      <br></br>
      {showTime ? <TimeAndAmount /> : null}
      {errors && errorMsg ? (
        <div className="error-msg">
          <p>{errorMsg}</p>
        </div>
      ) : (
        ""
      )}
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
              // checked={handleGDPR == true}
              onChange={handleGDPR}
            ></input>
             
            <label>
              Du godkänner att vi enligt GDPR får spara dina uppgiter i samband
              med bokning
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
          {/* {showGDPR ? (
            <div className="gdpr-container">
              <input
                type="radio"
                id="gdpr"
                name="gdpr"
                value="gdpr"
                // checked={time == "1800"}
                // onChange={handleTime}
              ></input>
               
              <label>
                Du godkänner att vi enligt GDPR får spara dina uppgiter i
                samband med bokning
              </label>
              <br></br>
            </div>
          ) : (
            ""
          )} */}
          <button className="btn-submit" onClick={handleCancel}>
            Avbryt
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            Bekräfta
          </button>
        </div>
      ) : null}
    </div>
  );
};
