const express = require("express");

const {
  showBookings,
  saveBooking,
  deleteBooking,
  editBooking,
  checkAvailability,
  thanks,
} = require("../controllers/bookingController.js");

const app = express.Router();

app.get("/show", showBookings);

app.post("/booking", saveBooking);

app.delete("/delete/:id", deleteBooking);

app.put("/edit/:id", editBooking);

app.get("/availability", checkAvailability);

app.get("/thanks/:id", thanks);

module.exports = app;
