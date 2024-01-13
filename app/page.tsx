'use client';
// import Image from 'next/image';

import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Image from 'next/image';
import mars from '@/public/images/mars.jpg';
import { Metadata } from 'next';
import HeavyComponent from './components/HeavyComponent';

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <main>
            <h1 className='font-poppins'>
                Hello {session && <span>{session.user!.name}</span>}
            </h1>
            <HeavyComponent />
            {/* <Link href='/users'>Users</Link> */}
            {/* <ProductCard /> */}
            {/* <Image
                src='https://bit.ly/react-cover'
                alt='mars'
                fill
                className='object-cover'
                sizes='100vw'
            /> */}
        </main>
    );
}

// export async function generateMetadata(): Promise<Metadata> {
//     const product = await fetch('');

//     return {
//         title: 'product.title',
//         description: '...',
//     };
// }
