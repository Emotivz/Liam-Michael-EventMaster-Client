import { useParams } from "react-router-dom";
import "./DetailedEvent.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../util/apiData";

const DetailedEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  //axios call to fetch event details
  const fetchEvent = () => {
    axios
      .get(`${API_URL}/events/${eventId}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch event details on page load
  useEffect(() => {
    fetchEvent();
  }, []);

  // when event details have been set into state rerender
  useEffect(() => {
    if (!event) {
      return;
    }
  }, [event]);

  if (!event) {
    return <p>Loading event...</p>;
  }

  return (
    <article className="detailed-e">
      <div className="detailed-e__internal">
        <h3 className="detailed-e__title">{event.title}</h3>
        <p className="detailed-e__info">{event.host}</p>
        <p className="detailed-e__info">{event.date}</p>
        <p className="detailed-e__info">Time: _____ to _____</p>
        <p className="detailed-e__info">{event.address}</p>

        <h4 className="detailed-e__contact">Contact Details</h4>
        <p className="detailed-e__info">Mobile: {event.phoneNumber} </p>
        <p className="detailed-e__info">Email: {event.email}</p>
      </div>

      <img
        src="https://placehold.jp/100x100.png"
        alt="thumbnail"
        className="detailed-e__thumbnail"
      />
    </article>
  );
};

export default DetailedEvent;
