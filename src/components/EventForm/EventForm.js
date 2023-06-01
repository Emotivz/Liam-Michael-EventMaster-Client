// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../util/apiData";
import "./EventForm.scss";
import axios from "axios";
import { useState } from "react";

//form to create a event
const EventForm = () => {
  const [posted, setPosted] = useState("");
  const navigate = useNavigate();

  const sendEvent = (event) => {
    axios
      .post(`${API_URL}/events`, event)
      .then((response) => {
        setPosted("Event has been posted!!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newEvent = {
      title: e.target.title.value,
      date: Math.floor(new Date(e.target.date.value).getTime()),
      address: e.target.address.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      details: e.target.details.value,
    };
    sendEvent(newEvent);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <section className="form">
      <h2 className="form__title">Create New event</h2>
      <p className="form__subtitle">Throw the most outrageous events!!</p>

      <form
        className="event-form"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label htmlFor="title">Title:</label>
        <input name="title" type="text" className="event-form__input" />
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" className="event-form__input" />
        <label htmlFor="address">Address</label>
        <input name="address" type="address" className="event-form__input" />
        <label htmlFor="phoneNumber">Phone number</label>
        <input name="phoneNumber" type="number" className="event-form__input" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" className="event-form__input" />
        <label htmlFor="">Optional Image:</label>
        <input name="" type="file" className="event-form__input" />
        <label htmlFor="details">Additional Details</label>
        <textarea name="details" type="text" className="event-form__input" />
        <input type="submit" className="event-form__submit" />
      </form>
      <p className="event-form__posted">{posted}</p>
    </section>
  );
};

export default EventForm;
