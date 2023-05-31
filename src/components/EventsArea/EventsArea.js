import "./EventsArea.scss";
import Event from "../Event/Event";

// Displays the events on the main page using the event.js component
const EventsArea = () => {
  return (
    <section className="events">
      <h1 className="events__title">Events </h1>
      <ul className="events__list">
        <Event />
        <Event />
      </ul>
    </section>
  );
};

export default EventsArea;
