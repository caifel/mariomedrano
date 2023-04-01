import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

export async function getList() {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');
  // Sorting by _id is same as sorting by date
  const data = await collection.find().limit(5).sort({ _id: -1 }).toArray();

  return data;
}
