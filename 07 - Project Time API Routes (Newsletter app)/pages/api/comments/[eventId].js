import { MongoClient } from "mongodb";

async function eventCommentHandler(req, res) {
    const client = await MongoClient.connect('DB_URL');
    const db = client.db();

    if(req.method === 'POST') {
        const { email, name, message } = req.body;
        if(!email || !name || !message || !email.includes('@') || email.trim() === '' || name.trim() === 0 ) {
            res.status(201).json({message: "Invalid input."});
            client.close();
            return;
        }
        const commentData = {eventId: req.query.eventId, email, name, message };

        const result = await db.collection('comments').insertOne({...commentData});
        commentData.id = result.insertedId;

        res.status(200).json({message: "Success!", comment: commentData});
    }
    else {
        const comments = [
            {id: '1', message: 'Comment 1', name: 'Denis'}, {id: '2', message: 'Comment 2', name: 'David'}
        ];
        res.status(200).send(JSON.stringify(comments));
    }
    client.close();
}

export default eventCommentHandler;