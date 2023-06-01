// displays all the event data, dependent on where its being shown
import { Link, useParams } from "react-router-dom";
import "./Event.scss";
import { timeAway } from "../../util/time";

const Event = ({ event }) => {
  return (
    <Link to={`events/${event.id}`} className="event__link">
      <article className="event">
        <div className="event__internal">
          <h3 className="event__title">{event.title}</h3>
          <p className="event__date">{timeAway(event.date)}</p>
          <p className="event__host">{event.host}</p>
        </div>
        <img
          src="https://placehold.jp/100x100.png"
          alt="thumbnail"
          className="event__thumbnail"
        />
      </article>
    </Link>
  );
};

export default Event;
