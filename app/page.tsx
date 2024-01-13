'use client';
import { useState } from 'react';
import _ from 'lodash';

// import dynamic from 'next/dynamic';
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//     loading: () => <p>Loading...</p>,
// });
// import Image from 'next/image';

// import Link from 'next/link';
// import ProductCard from './components/ProductCard';
// import Image from 'next/image';
// import mars from '@/public/images/mars.jpg';
// import { Metadata } from 'next';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
// import HeavyComponent from './components/HeavyComponent';

export default function Home() {
    // const [isVisible, setIsVisible] = useState(false);
    // const session = await getServerSession(authOptions);
    return (
        <main>
            {/* <h1 className='font-poppins'>
                Hello {session && <span>{session.user!.name}</span>}
            </h1> */}
            <h1 className='font-poppins'>Hello World</h1>
            <button
                onClick={async () => {
                    const _ = (await import('lodash')).default;
                    const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
                    const sorted = _.orderBy(users, ['name']);
                    console.log(sorted);
                }}
            >
                SHOW
            </button>
            {/* {isVisible && <HeavyComponent />} */}
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
