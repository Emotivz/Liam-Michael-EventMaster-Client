//form to reserve a spot at an event
import "./RsvpForm.scss";
const RsvpForm = () => {
  return (
    <section className="rsvp">
      <h2 className="rsvp__title"> Reserve your spot</h2>
      <p>Don't miss out on the potential party of the year</p>
      <form className="rsvp-form">
        <label htmlFor="Name">Name</label>
        <input name="Name" type="text" className="rsvp-form__input" />
        <label htmlFor="mobile">Phone number</label>
        <input name="mobile" type="number" className="rsvp-form__input" />

        <input type="submit" className="event-form__submit" />
      </form>
    </section>
  );
};

export default RsvpForm;
