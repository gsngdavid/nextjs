import { extractData, getDataFilePath } from "./feedback";

function feedbackIdHandler(req, res) {
    const feedbackId = req.query.feedbackId;
    const filePath = getDataFilePath();
    const feedbackItems = extractData(filePath);
    const selectedFeedback = feedbackItems.find(feedback => feedback.id === feedbackId);
    res.status(200).json({ feedback: selectedFeedback });
}

export default feedbackIdHandler;