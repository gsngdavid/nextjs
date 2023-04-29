import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";

function FilteredEvents() {
    const router = useRouter();
    const slug = router.query.slug;

    if(!slug) {
        return <p className='center'>Loading...</p>;
    }

    const year = +slug[0];
    const month = +slug[1];

    if(isNaN(year) || isNaN(month) || year > 2030 || year < 2010 || month < 1  || month > 12) {
        return <p className="center">Invalid filters. Adjust your values!</p>
    }

    const filteredEvents = getFilteredEvents({year, month});

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found!</p>
    }

    return <Fragment>
        <EventList events={filteredEvents} />
    </Fragment>
}

export default FilteredEvents;