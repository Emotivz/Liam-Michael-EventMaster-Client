import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import RsvpPage from "./Pages/RsvpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event" element={<EventPage />} />
        <Route path="/RSVP" element={<RsvpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
