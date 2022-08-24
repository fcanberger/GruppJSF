import { useState } from "react";
import DatePicker from "sassy-datepicker";

export const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const onChange = (newDate: Date) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
    setShowTime(true);
  };

  const Results = () => (
    <div id="results" className="search-results">
      <p>18:00</p>
      <p>21:00</p>
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
        {showTime ? <Results /> : null}
      </div>
    </div>
  );
};
