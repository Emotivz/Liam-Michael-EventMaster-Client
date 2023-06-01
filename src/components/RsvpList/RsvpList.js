//the aside in the rsvp page
import "./RsvpList.scss";
const RsvpList = ({ events }) => {
  return (
    <section className="rsvp-list">
      <h3 className="rsvp-list__title">
        Current Attendees: {events.attending.length}
      </h3>
      <ul className="rsvp-list__list">
        {events.attending.map((event) => (
          <li className="rsvp-list__name" key={event.id}>
            {event.name + ","}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RsvpList;
