import { Fragment, useState } from "react";
import { getDataFilePath, extractData } from "../api/feedback";

function FeedbackPage(props) {

    const [ selectedFeedback, setSelectedFeedback ] = useState();
    // 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('/api/feedback');
    //         const data = await response.json();
    //         setFeedback(data.feedback);
    //         console.log(data.feedback);
    //     }
    //     fetchData();
    // }, []);

    function loadEmailHandler(id) {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => {
            setSelectedFeedback(data.feedback);
        })
    }

    return <Fragment>
        {selectedFeedback && <p>{selectedFeedback.email}</p>}
        <ul>
            {
                props.feedbackItems.map(feedback => 
                <li key={feedback.id}>
                    {feedback.message}
                    <button onClick={loadEmailHandler.bind(null, feedback.id)}>Load email</button>
                </li>)
            }
        </ul>
    </Fragment>
}

export async function getStaticProps() {
    const path = getDataFilePath();
    const data = extractData(path);

    return {
        props: { feedbackItems: data }
    };
}

export default FeedbackPage;