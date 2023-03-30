import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.msvoy6e.mongodb.net/?retryWrites=true&w=majority`;
const clientPromise = MongoClient.connect(uri);

async function updateData(id: string, title: string) {
  const client = await clientPromise;
  const db = client.db('main');
  const collection = db.collection('zukko');

  return collection.updateOne({ _id: new ObjectId(id) }, { $set: { title } });
}

export async function PUT(request: Request) {
  const { id, title } = await request.json();

  try {
    const result = await updateData(id, title);

    console.log(id + ' ' + title);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return new NextResponse('Error', { status: 500 });
  }
}
