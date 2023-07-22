import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return <div>
    <EventList events={featuredEvents} />
  </div>
}

export default HomePage;
