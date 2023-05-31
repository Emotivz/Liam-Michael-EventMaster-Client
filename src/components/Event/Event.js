// displays all the event data, dependent on where its being shown
import "./Event.scss";
const Event = () => {
  return (
    <article className="event">
      <div className="event__internal">
        <h3 className="event__title">title</h3>
        <p className="event__date">date/time</p>
        <p className="event__host">host</p>
      </div>

      <img
        src="https://placehold.jp/100x100.png"
        alt="thumbnail"
        className="event__thumbnail"
      />
    </article>
  );
};

export default Event;
