import "./DetailedEvent.scss";

const DetailedEvent = ({ event }) => {
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
