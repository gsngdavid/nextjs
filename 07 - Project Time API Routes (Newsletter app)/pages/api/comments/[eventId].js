import { connectDatabase, insertDocument } from "../../../helpers/api-util";

async function eventCommentHandler(req, res) {
    let client = null;
    try {
        client = await connectDatabase();
    }
    catch(error) {
        res.status(500).json({message: "Failed to connect to database"});
        return;
    }

    if(req.method === 'POST') {
        const { email, name, message } = req.body;
        if(!email || !name || !message || !email.includes('@') || email.trim() === '' || name.trim() === 0 ) {
            res.status(201).json({message: "Invalid input."});
            client.close();
            return;
        }
        const commentData = {eventId: req.query.eventId, email, name, message };

        let result = null;

        try {
            result = await insertDocument(client, 'comments', {...commentData});
        }
        catch(error) {
            res.status(500).json({message: "Failed to insert data to database"});
            return;
        }

        commentData.id = result.insertedId;
        res.status(200).json({message: "Success!", comment: commentData});
    }
    else {
        let comments = null;

        try {
            const db = client.db();
            comments = await db.collection('comments').find().sort({_id: -1}).toArray();
        }
        catch(error) {
            res.status(500).json({message: "Failed to fetch comments"});
            return;
        }

        res.status(200).send(JSON.stringify(comments));
    }
    client.close();
}

export default eventCommentHandler;