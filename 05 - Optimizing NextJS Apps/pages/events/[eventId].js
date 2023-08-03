import { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import Head from 'next/head';

import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';

function EventDetailPage(props) {
    const { event } = props;
    
    if(!event) {
        return <Fragment>
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        </Fragment>
    }

    return <Fragment>
        <Head>
            <title>{event.title}</title>
            <meta name='description' content={event.description} />
        </Head>
        <EventSummary title={event.title} />

        <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.imageAlt}
        />

        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        
    </Fragment>
}

export default EventDetailPage;

export async function getStaticProps(context) {
    const { params } = context;
    const loadedEvent = await getEventById(params.eventId);
    
    return {
        props: {event : loadedEvent ?? null},
        revalidate: 30
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const pathsArr = events.map(event => ({params: {eventId: event.id}}));

    return {
        paths: pathsArr,
        fallback: 'blocking' // I want to display my not found event instead of not found page
    };
}