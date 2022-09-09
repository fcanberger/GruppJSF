const booking = require("../models/BookingsModels");
const adminRes = require("../models/adminResModels");
const app = require("../routes/bookingsRoute");

// Visa bokningar

const showBookings = async (req, res) => {
  const booking = await adminRes.find();
  res.status(200).send(booking);
};

// Spara bokning

const saveBooking = async (req, res) => {
  const { AOP, date, time, customerName, customerEmail, customerNumber } =
    req.body;


  // Ny bokning till mongoose
  const newBooking = await adminRes.create({
    AOP: AOP,
    date: date,
    time: time,
    customerName: customerName,
    customerEmail: customerEmail,
    customerNumber: customerNumber,
  });
  res.status(200).send(newBooking);
};

// Ta bort boking som admin

const deleteBooking = async (req, res) => {
  const id = req.params.id;

  await adminRes.findById(id).deleteOne();

  res.status(200).send();
};

// Redigera bokning som admin

const editBooking = async (req, res) => {
  const id = req.params.id;

  await adminRes.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      AOP: req.body.AOP,
      date: req.body.date,
      time: req.body.time,
      customerName: req.body.customerName,
      customerEmail: req.body.customerEmail,
      customerNumber: req.body.customerNumber,
    }
  );
  // res.redirect("http://localhost:3000/Reservation");
};

// Check availability
const checkAvailability = async (req, res) => {
  const availability = await adminRes.find();

  res.status(200).send(availability);
};

//Thank you
const thanks = async (req, res) => {
  // const id = req.params.id;
  // const person = adminRes.find((p) => p.id === id);
  const thanks = await adminRes.find();
  res.status(200).send(thanks);
};

module.exports = {
  showBookings,
  saveBooking,
  deleteBooking,
  editBooking,
  checkAvailability,
  thanks,
};
