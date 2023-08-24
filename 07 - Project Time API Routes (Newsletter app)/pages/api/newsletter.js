import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function newsletterHandler(req, res) {
    if(req.method === 'POST') {
        const email = req.body.email;
        if(!email || !email.includes('@')) {
            res.status(422).json({message: 'Invalid email address.'});
            return;
        }

        let client = null;

        try {
            client = await connectDatabase();
        }
        catch(error) {
            res.status(500).json({message: "Failed to connect to the database"});
            return;
        }
        
        try {
            await insertDocument(client, 'newsletter', {email});
        }
        catch(error) {
            res.status(500).json({message: "Failed to insert data to database"});
            return;
        }
        finally {
            client.close();
        }

        res.status(201).json({message: 'Successfully signed up!', email});
    }
}

export default newsletterHandler;