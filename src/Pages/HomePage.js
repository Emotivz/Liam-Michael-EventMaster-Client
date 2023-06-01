import EventsArea from "../components/EventsArea/EventsArea";
import eventsJSON from "../data/sample.json";
// uses title, host, date and img

const HomePage = () => {
  return (
    <>
      <EventsArea eventsJSON={eventsJSON} />
    </>
  );
};

export default HomePage;
