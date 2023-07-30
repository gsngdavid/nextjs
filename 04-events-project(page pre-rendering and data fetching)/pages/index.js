import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage(props) {
  const featuredEvents = props.events;

  return <div>
    <EventList events={featuredEvents} />
  </div>
}

export default HomePage;

export async function getStaticProps() {
  const response = await fetch('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();
  const featuredEvents = [];

  for(let key in data) {
    if(data[key].isFeatured) {
      featuredEvents.push({
        id: key,
        ...data[key]
      })
    }
  }
  
  return {
    props: { events: featuredEvents },
    revalidate: 10
  }
}