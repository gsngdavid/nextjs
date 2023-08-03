import { Fragment } from "react";
import { getFilteredEvents } from "../../helpers/api-util";
import Head from "next/head";

import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/Events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";

function FilteredEvents(props) {
    if(props.invalid) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filters. Adjust your values!</p>
            </ErrorAlert>

            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = props.events;

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

    const date = new Date(props.date.year, props.date.month);

    return <Fragment>
        <Head>
            <title>NextJS | Filtered Events</title>
            <meta name='description' content={`All events for ${date.getMonth()}/${date.getFullYear()}`} />
        </Head>
        <ResultsTitle date={date} />
        <EventList events={filteredEvents} />
    </Fragment>
}

export default FilteredEvents;

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const year = +slug[0];
    const month = +slug[1];

    if(isNaN(year) || isNaN(month) || year > 2030 || year < 2010 || month < 1  || month > 12) {
        return {
            props: {invalid: true}
        };
    }

    const filteredEvents = await getFilteredEvents({year, month});

    return {
        props: {
            events : filteredEvents,
            date: {year, month: month - 1}
        },
    };
}