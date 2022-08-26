import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Booking } from "./components/Pages/Booking";
import { Meny } from "./components/Pages/Meny";
import { Contact } from "./components/Pages/Contact";
import { Admin } from "./components/Pages/Admin";
import { Reservation } from "./components/Pages/Reservation";
import { Footer } from "./components/Pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/meny" element={<Meny />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/Reservation" element={<Reservation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
