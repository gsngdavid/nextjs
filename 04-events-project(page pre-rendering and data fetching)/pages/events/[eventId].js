import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';

import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';

function EventDetailPage() {
    const router = useRouter();

    const event = getEventById(router.query.eventId);
    console.log(event);
    
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