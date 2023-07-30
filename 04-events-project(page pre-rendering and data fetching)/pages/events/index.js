import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import { getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/Events/EventsSearch';
import { useRouter } from 'next/router';

function EventsPage(props) {
    const router = useRouter();
    const { events } = props;

    const filterHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return <Fragment>
        <EventSearch onSearch={filterHandler} />
        <EventList events={events} />
    </Fragment>
}

export default EventsPage;

export async function getStaticProps() {
    const response = await fetch('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = [];

    for(let key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return {
        props: { events },
        revalidate: 10
    }
}