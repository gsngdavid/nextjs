import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';

function EventDetailPage() {
    const router = useRouter();

    const event = getEventById(router.query.eventId);
    
    if(!event) {
        return <h1>No events found!</h1>
    }

    return <Fragment>
        <EventSummary title={event.title} />

        <EventLogistics
            date={event.date}
            address={event.address}
            image={event.image}
            imageAlt={event.imageAlt}
        />

        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        
    </Fragment>
}

export default EventDetailPage;