// GET - getting data
// POST - put data

import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
    return NextResponse.json('hello');
}
