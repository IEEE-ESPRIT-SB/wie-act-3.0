import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';

import { Html } from 'next/document';
import './globals.css';

export const metadata: Metadata = {
    title: 'WIE ACT 3.0',
    description: 'Women in Engineering Annual Congress of Tunisia 3.0',
    keywords: 'WIE ACT, Women in Engineering, Congress, Tunisia, 2024',
    openGraph: {
        title: 'WIE ACT 3.0',
        description: 'Women in Engineering Annual Congress of Tunisia 3.0',
        url: 'https://wie-act.tn',
        type: 'website',
        images: [
            {
                url: 'https://wie-act.tn/images/logo.webp',
                width: 800,
                height: 600,
                alt: 'WIE ACT 3.0'
            }
        ]
    }
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
        <Html lang='en' className={oswald.className}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </Html>
    );
}
