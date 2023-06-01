import DetailedEvent from "../components/DetailedEvent/DetailedEvent";
import RsvpForm from "../components/RsvpForm/RsvpForm";

const EventPage = () => {
  return (
    <>
      <DetailedEvent /> {/* create Detailed event */}
      <RsvpForm />
    </>
  );
};

export default EventPage;
