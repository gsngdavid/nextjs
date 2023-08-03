import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/Events/EventList";

function HomePage(props) {
  const { featuredEvents } = props;

  return <div>
    <EventList events={featuredEvents} />
  </div>
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  
  return {
    props: { featuredEvents },
    revalidate: 1800
  }
}