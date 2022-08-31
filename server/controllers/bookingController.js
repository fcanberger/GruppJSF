const booking = require("../models/BookingsModels");
const adminRes = require("../models/adminResModels");

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
  newBooking
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};

// Ta bort boking som admin

const deleteBooking = async (req, res) => {
  const id = req.params.id;

  await adminRes.findById(id).deleteOne();
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
};

module.exports = { showBookings, saveBooking, deleteBooking, editBooking };
