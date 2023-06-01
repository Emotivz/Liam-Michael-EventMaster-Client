import DetailedEvent from "../components/DetailedEvent/DetailedEvent";
import RsvpForm from "../components/RsvpForm/RsvpForm";
import RsvpList from "../components/RsvpList/RsvpList";

const EventPage = () => {
  return (
    <>
      <DetailedEvent /> {/* create Detailed event */}
      <RsvpForm />
      <RsvpList />
    </>
  );
};

export default EventPage;
