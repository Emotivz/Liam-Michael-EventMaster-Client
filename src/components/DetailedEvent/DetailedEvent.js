import "./DetailedEvent.scss";

const DetailedEvent = () => {
  return (
    <article className="detailed-e">
      <div className="detailed-e__internal">
        <h3 className="detailed-e__title">Title</h3>
        <p className="detailed-e__info">Host</p>
        <p className="detailed-e__info">Date</p>
        <p className="detailed-e__info">Time: _____ to _____</p>
        <p className="detailed-e__info">Address</p>

        <h4 className="detailed-e__contact">Contact Details</h4>
        <p className="detailed-e__info">Mobile: </p>
        <p className="detailed-e__info">Email: </p>
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
