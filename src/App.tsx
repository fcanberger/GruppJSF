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
import { NotFound } from "./components/Pages/NotFound";
import { Footer } from "./components/Pages/Footer";
import { Edit } from "./components/Edit";

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
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Reservation" element={<Reservation />}></Route>
          <Route path="/Edit/:id" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
