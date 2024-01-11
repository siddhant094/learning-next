import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';
// import { Suspense } from 'react';
import AuthProvider from './auth/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' data-theme='winter'>
            <body className={inter.className}>
                <AuthProvider>
                    <NavBar />
                    <main className='p-5'>
                        {/* <Suspense fallback={<p>Loading...</p>}> */}
                        {children}
                        {/* </Suspense> */}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
