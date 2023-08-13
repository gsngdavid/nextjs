import { getDataFilePath, extractData } from "../api/feedback";

function FeedbackPage(props) {

    // const [ feedback, setFeedback ] = useState([]);
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

    return <ul>
        {props.feedbackItems.map(feedback => <li key={feedback.id}>{feedback.message}</li>)}
    </ul>
}

export async function getStaticProps() {
    const path = getDataFilePath();
    const data = extractData(path);

    return {
        props: { feedbackItems: data }
    };
}

export default FeedbackPage;