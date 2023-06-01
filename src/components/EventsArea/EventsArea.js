import "./EventsArea.scss";
import Event from "../Event/Event";

// Displays the events on the main page using the event.js component
const EventsArea = ({ events }) => {
  return (
    <section className="events">
      <h1 className="events__title">Events</h1>
      <ul className="events__list">
        {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </ul>
    </section>
  );
};

export default EventsArea;
