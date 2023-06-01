import DetailedEvent from "../components/DetailedEvent/DetailedEvent";
import RsvpForm from "../components/RsvpForm/RsvpForm";
import RsvpList from "../components/RsvpList/RsvpList";
import events from "../data/sample.json";

const EventPage = () => {
  return (
    <>
      <DetailedEvent /> {/* create Detailed event */}
      <RsvpForm />
      <RsvpList events={events[0]} />
    </>
  );
};

export default EventPage;
