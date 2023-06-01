import EventsArea from "../components/EventsArea/EventsArea";
import events from "../data/sample.json";
// uses title, host, date and img

const HomePage = () => {
  return (
    <>
      <EventsArea events={events} />
    </>
  );
};

export default HomePage;
