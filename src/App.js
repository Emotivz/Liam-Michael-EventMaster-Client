import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import RsvpPage from "./Pages/RsvpPage";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event" element={<EventPage />} />
        <Route path="/RSVP" element={<RsvpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
