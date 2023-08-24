import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const DB_URL = 'mongodb+srv://david:Duj!W7QuZtZdZ7$@gsngdavid.bmf015x.mongodb.net/events?retryWrites=true&w=majority';
    const client = await MongoClient.connect(DB_URL);
    return client;
}
  
export async function insertDocument(client, collection, document) {
    const db = client.db();
    return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
    const db = client.db();
    return await db.collection(collection).find().sort(sort).toArray();
}