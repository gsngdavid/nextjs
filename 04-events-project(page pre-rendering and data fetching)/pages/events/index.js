import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import { getAllEvents } from '../../helpers/api-util';
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
    const events = await getAllEvents();

    return {
        props: { events },
        revalidate: 120
    }
}