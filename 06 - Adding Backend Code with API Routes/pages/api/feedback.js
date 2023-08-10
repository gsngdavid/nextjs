import fs from 'fs';
import path from 'path';

function feedback(req, res) {
    if(req.method === 'POST') {
        const { email, message } = req.body;
        const feedbackObj = {
            id: new Date().toISOString(),
            email, message
        }
        const dataFilePath = path.join(process.cwd(), 'data', 'feedback.json');
        const data = fs.readFileSync(dataFilePath);
        const jsonData = JSON.parse(data);
        jsonData.push(feedbackObj);
        
        fs.writeFileSync(dataFilePath, JSON.stringify(jsonData));
        res.status(201).json({message: 'Success!', feedback: feedbackObj});
    }
    else {
        res.status(200).json({message: 'Hello from feedback'});
    }
}

export default feedback;