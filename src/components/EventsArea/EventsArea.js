import "./EventsArea.scss";
import Event from "../Event/Event";
import { API_URL } from "../../util/apiData";
import axios from "axios";
import { useEffect, useState } from "react";

// Displays the events on the main page using the event.js component
const EventsArea = ({ eventsJSON }) => {
  //initilise state
  const [events, setEvents] = useState(null);

  //axios call to get list of events
  const fetchEvents = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch events on page load
  useEffect(() => {
    fetchEvents();
  }, []);

  // when events have been set into state rerender
  useEffect(() => {
    if (!events) {
      return;
    }
  }, [events]);

  if (!events) {
    return <p>Loading events...</p>;
  }

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
