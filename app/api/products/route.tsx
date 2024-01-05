import { NextRequest, NextResponse } from 'next/server';
import DATA from './products.json';
import schema from './schema';

export function GET(request: NextRequest) {
    return NextResponse.json(DATA);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 404 });
    return NextResponse.json({ id: 3, name: body.name, price: body.price });
}
