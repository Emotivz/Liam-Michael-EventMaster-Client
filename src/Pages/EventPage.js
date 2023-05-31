import Event from "../components/Event/Event";
import RsvpForm from "../components/RsvpForm/RsvpForm";

const EventPage = () => {
  return (
    <>
      <Event /> {/* create Detailed event */}
      <RsvpForm />
    </>
  );
};

export default EventPage;
