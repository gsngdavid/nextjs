import fs from 'fs';
import path from 'path';

function getDataFilePath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractData(path) {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function feedback(req, res) {
    if(req.method === 'POST') {
        const { email, message } = req.body;
        const feedbackObj = {
            id: new Date().toISOString(),
            email, message
        }
        // Store data in a json file
        const dataFilePath = getDataFilePath();
        const data = extractData(dataFilePath);
        data.push(feedbackObj);

        fs.writeFileSync(dataFilePath, JSON.stringify(data));
        res.status(201).json({message: 'Success!', feedback: feedbackObj});
    }
    else {
        const dataFilePath = getDataFilePath();
        const data = extractData(dataFilePath);
        res.status(200).json({feedback: data});
    }
}

export default feedback;