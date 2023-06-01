// import { Navigate } from "react-router-dom";
import "./EventForm.scss";

//form to create a event
const EventForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <h2 className="form__title">Create New event</h2>
      <p className="form__subtitle">Throw the most outrageous events!!</p>

      <form
        className="event-form"
        onSubmit={(e) => {
          submitHandler(e);
          let newEvent = {
            title: e.target.title.value,
            date: e.target.date.value,
            address: e.target.address.value,
            phoneNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
            details: e.target.details.value,
          };

          console.log(newEvent);
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
    </section>
  );
};

export default EventForm;
