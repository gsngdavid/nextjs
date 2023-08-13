import { useEffect, useState } from "react";

function FeedbackPage() {

    const [ feedback, setFeedback ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/feedback');
            const data = await response.json();
            setFeedback(data.feedback);
            console.log(data.feedback);
        }
        fetchData();
    }, []);

    return <ul>
        {feedback.map(item => <li>{item.message}</li>)}
    </ul>
}

export default FeedbackPage;