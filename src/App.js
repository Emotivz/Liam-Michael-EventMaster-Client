import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import Nav from "./components/Nav/Nav";
import EventFormpage from "./Pages/EventFormpage";
import DeadEnd from "./Pages/DeadEnd";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event" element={<EventPage />} />
        <Route path="/EventForm" element={<EventFormpage />} />
        <Route path="*" element={<DeadEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
