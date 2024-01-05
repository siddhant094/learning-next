import { NextRequest, NextResponse } from 'next/server';
import DATA from '../products.json';

interface Props {
    params: {
        id: number;
    };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    const res = await DATA.filter((item) => item.id == id);
    if (!res) return NextResponse.json('User does not exist');
    return NextResponse.json(res);
}

// export async function GET(request: NextRequest, { params: { id } }: Props) {
//     const res = await DATA.filter((item) => item.id == id);
//     if (!res) return NextResponse.json('User does not exist');
//     return NextResponse.json(res);
// }
