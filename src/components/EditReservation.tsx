import { useState } from "react";
import { Reservation } from "./Pages/Reservation";

export const EditReservation = () => {
  return (
    <>
      <div>
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

          <button type="submit" onClick={saveEdit}>
            Ändra
          </button>
          <button onClick={() => setIsEditing(false)}>Tillbaka</button>
        </form>
      </div>
    </>
  );
};
