import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';

import './globals.css';

export const metadata: Metadata = {
    title: 'WIE ACT 3.0',
    description: 'Women in Engineering Annual Congress of Tunisia 3.0',
    keywords: 'WIE ACT, Women in Engineering, Congress, Tunisia, 2024',
    openGraph: {
        title: 'WIE ACT 3.0',
        description: 'Women in Engineering Annual Congress of Tunisia 3.0',
        url: 'https://wieact3.com',
        type: 'website',
        images: [
            {
                url: 'https://wieact3.com/images/og-image.jpg',
                width: 800,
                height: 600,
                alt: 'WIE ACT 3.0'
            }
        ]
    },
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'WIE ACT 3.0',
        startDate: '2024-10-12T10:00:00+01:00',
        endDate: '2024-10-13T14:00:00+01:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: 'Tunis, Tunisia',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Main St',
                addressLocality: 'Tunis',
                postalCode: '1000',
                addressCountry: 'TN'
            }
        },
        image: [
            'https://wieact3.com/images/og-image.jpg'
        ],
        description: 'Women in Engineering Annual Congress of Tunisia 3.0',
        organizer: {
            '@type': 'Organization',
            name: 'IEEE WIE ESPRIT SBAG',
            url: 'https://wieact3.com'
        }
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
        <html lang='en' className={oswald.className}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
