import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import { getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/Events/EventsSearch';
import { useRouter } from 'next/router';

function EventsPage() {

    const router = useRouter();
    let events = getAllEvents();

    const filterHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    }

    return <Fragment>
        <EventSearch onSearch={filterHandler} />
        <EventList events={events} />
    </Fragment>
}

export default EventsPage;