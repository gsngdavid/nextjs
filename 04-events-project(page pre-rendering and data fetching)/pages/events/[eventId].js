import { Fragment } from 'react';

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
    const response = await fetch('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const loadedEvent = data[params.eventId];

    if(!loadedEvent) {
        return {
            props: {event: null}
        }
    }
    
    return {
        props: {event : loadedEvent}
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const paramsArr = [];

    for(let key in data) {
        paramsArr.push({
            params: { eventId: key }
        });
    }

    return {
        paths: paramsArr,
        fallback: true
    }
}