import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
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
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
