const express = require("express");

const {
  showBookings,
  saveBooking,
  deleteBooking,
  editBooking,
  checkAvailability,
} = require("../controllers/bookingController.js");

const app = express.Router();

app.get("/show", showBookings);

app.post("/booking", saveBooking);

app.post("/delete", deleteBooking);

app.post("/edit/:id", editBooking);

app.get("/availability", checkAvailability);

module.exports = app;
