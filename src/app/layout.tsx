import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';

import './globals.css';

export const metadata: Metadata = {
    title: 'WIE ACT 3.0',
    description: ''
};

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={oswald.className}>
            <body>
                <Image
                    className='absolute top-0 right-0'
                    src='/images/hero-bg.png'
                    alt='hero'
                    width={1500}
                    height={900}
                />
                <Image
                    className='absolute top-0 left-0'
                    src='/images/act.png'
                    alt='hero'
                    width={200}
                    height={900}
                />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
