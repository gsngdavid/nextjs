import Head from 'next/head';

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/Events/EventList";

function HomePage(props) {
  const { featuredEvents } = props;

  return <div>
    <Head>
      <title>NextJS Events</title>
      <meta name='description' content='Find all the events that will help you to evolve...' />
    </Head>
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