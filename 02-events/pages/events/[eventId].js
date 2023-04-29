import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent';

function EventDetailPage() {
    const router = useRouter();

    const event = getEventById(router.query.eventId);
    console.log(event);
    
    if(!event) {
        return <h1>No events found!</h1>
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