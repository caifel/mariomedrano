import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

async function saveData(title: string, description: string) {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');

  return collection.insertOne({ title, description });
}

export async function POST(request: Request) {
  const { title, description } = await request.json();

  try {
    const result = await saveData(title, description);

    return NextResponse.json({
      id: result.insertedId
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error', { status: 500 });
  }
}
