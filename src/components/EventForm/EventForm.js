import "./EventForm.scss";
//form to create a event
const EventForm = () => {
  return (
    <section className="form">
      <h2 className="form__title">Create New event</h2>
      <p className="form__subtitle">Throw the most outrageous events!!</p>

      <form className="event-form">
        <label htmlFor="title">Title:</label>
        <input name="title" type="text" className="event-form__input" />
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" className="event-form__input" />
        <label htmlFor="time">Time:</label>
        <div>
          <input name="time" type="time" className="event-form__input" />
          To
          <input name="time" type="time" className="event-form__input" />
        </div>
        <label htmlFor="address">Address</label>
        <input name="address" type="address" className="event-form__input" />
        <label htmlFor="mobile">Phone number</label>
        <input name="mobile" type="number" className="event-form__input" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" className="event-form__input" />
        <label htmlFor="">Optional Image:</label>
        <input name="" type="file" className="event-form__input" />
        <label htmlFor="details">Additional Details</label>
        <textarea name="details" type="text" className="event-form__input" />
      </form>
    </section>
  );
};

export default EventForm;
