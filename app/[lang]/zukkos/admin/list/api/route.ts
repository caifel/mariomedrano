import { getList } from 'app/[lang]/zukkos/lib/getList';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const list = await getList();

    return NextResponse.json({ list });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error', { status: 500 });
  }
}
