import { MongoClient } from 'mongodb';

async function newsletterHandler(req, res) {
    if(req.method === 'POST') {
        const email = req.body.email;
        if(!email || !email.includes('@')) {
            res.status(422).json({message: 'Invalid email address.'});
            return;
        }

        const client = await MongoClient.connect('DB_URL')
        const db = client.db();
        await db.collection('newsletter').insertOne({email});

        res.status(201).json({message: 'Successfully signed up!', email});
    }
}

export default newsletterHandler;