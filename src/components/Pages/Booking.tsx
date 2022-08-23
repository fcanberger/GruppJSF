import { SetStateAction, useState } from "react";
import DatePicker from "sassy-datepicker";

export const Booking = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: SetStateAction<Date>) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

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
    </div>
  );
};
