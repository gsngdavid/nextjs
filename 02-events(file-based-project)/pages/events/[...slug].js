import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/Events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";

function FilteredEvents() {
    const router = useRouter();
    const slug = router.query.slug;

    if(!slug) {
        return <p className='center'>Loading...</p>;
    }

    const year = +slug[0];
    const month = +slug[1];

    if(isNaN(year) || isNaN(month) || year > 2030 || year < 2010 || month < 1  || month > 12) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filters. Adjust your values!</p>
            </ErrorAlert>

            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({year, month});

    if(!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>
                <p>No events found!</p>
            </ErrorAlert>
            
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const date = new Date(year, month - 1);

    return <Fragment>
        <ResultsTitle date={date} />
        <EventList events={filteredEvents} />
    </Fragment>
}

export default FilteredEvents;