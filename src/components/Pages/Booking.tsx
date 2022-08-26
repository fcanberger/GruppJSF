import React, { useEffect, useState } from "react";
import DatePicker from "sassy-datepicker";

export const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [bookingForm, setBookingForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState("");
  const [bookingInfo, setBookingInfo] = useState({
    fname: "",
    number: "",
    email: "",
  });
  // const [errors, setErrors] = useState({
  //   required: false,
  //   requiredMsg: "",
  // });
  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (date && time && amount) {
      setBookingForm(true);
      console.log("datum, tid och antal:" + date, time, amount);
    }
  }, [date, amount, time]);

  const onChange = (newDate: Date) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
    setShowTime(true);
  };

  // TAR FRAM INFORMATIONS FORMULÄRET
  const checkAvailable = () => {
    //FETCHA OCH KOLLA IFALL DET ÄR LEDIGT

    setBookingForm(true);
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
    // console.log(e.target.value);
  };

  // SET INPUT BOOKING INFORMATION
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "number") {
      setBookingInfo({ ...bookingInfo, [e.target.name]: +e.target.value });
    } else {
      setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
    }
  };

  // VALIDATION
  // const validate = (): boolean => {
  //   if (bookingInfo.fname.length === 0) {
  //     console.log("VAFAN");
  //     setErrors({
  //       ...errors,
  //       required: true,
  //       requiredMsgName: "name",
  //       requiredMsg: "Vänligen fyll i namn",

  //     });
  //   }
  //   if (bookingInfo.number.length === 10) {
  //   } else {
  //     setErrors({
  //       ...errors,
  //       required: false,
  //     });
  //   }
  //   return false;
  // };

  // FETCH - GET BOOKINGS

  // HANDLE SUBMIT AND VALIDATION
  const handleSubmit = () => {
    if (bookingInfo.fname === "") {
      const text = "Fyll i namn";
      setErrors(true);
      setErrorMsg(text);
      console.log("fyll i namn");
      return;
    } else {
      setErrors(false);
    }
    if (bookingInfo.number.length !== 10) {
      const text = "Telefonnummret måste innehålla 10 siffror";
      setErrors(true);
      setErrorMsg(text);
      console.log("Telefonnummret måste innehålla 10 siffror");
      return;
    } else {
      setErrors(false);
    }
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const EmailIsValid = bookingInfo.email.toLowerCase().match(validRegex);

    if (EmailIsValid) {
    } else {
      const text = "Du måste fylla i en giltlig epost";
      setErrors(true);
      setErrorMsg(text);
      console.log("måste vara en giltlig epost");
      return;
    }

    console.log("sparar" + date, time, amount, bookingInfo);
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
      {bookingForm ? (
        <div className="bookings">
          <br></br>
          <input
            type="text"
            name="fname"
            value={bookingInfo.fname}
            onChange={handleInputChange}
            placeholder="NAMN*"
            required
          ></input>

          <br></br>

          <input
            type="text"
            name="number"
            min="10"
            max="10"
            placeholder="TELEFONNUMMER*"
            value={bookingInfo.number}
            onChange={handleInputChange}
            required
          ></input>
          <br></br>

          <input
            type="text"
            name="email"
            placeholder="EPOST*"
            value={bookingInfo.email}
            onChange={handleInputChange}
            required
          ></input>
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
        </div>
      ) : null}
    </div>
  );
};
