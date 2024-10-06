import Image from 'next/image';
import EventDate from './_components/event-date-section';
import GetToKnow from './_components/get-to-know-section';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import Speakers from './_components/speakers-section';
import Teams from './_components/teams-section';
import TechChallenge from './_components/tech-challenge-section';
import ComSocLogo from '/public/images/sponsors/com-soc.png';
import FoundationLogo from '/public/images/sponsors/foundation.png';
import IASLogo from '/public/images/sponsors/ias.png';
import SBLogo from '/public/images/sponsors/sb.png';
import StudentsLogo from '/public/images/sponsors/students.png';
import WieLogo from '/public/images/sponsors/wie.png';

export default function Home() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
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
            <HeroSection />
            <div className='flex justify-center items-center gap-20 overflow-x-scroll overflow-hidden z-10 scrollbar-hide'>
                <Image
                    src={ComSocLogo}
                    alt='Com Soc LOGO'
                    style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: '40px'
                    }}
                />
                <Image
                    src={FoundationLogo}
                    alt='Foundation Logo'
                    style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: '40px'
                    }}
                />
                <Image
                    src={IASLogo}
                    alt='IAS LOGO'
                    className='object-contain'
                />
                <Image
                    src={SBLogo}
                    alt='SB LOGO'
                    style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: '40px'
                    }}
                />
                <Image
                    src={StudentsLogo}
                    alt='Students LOGO'
                    style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: '40px'
                    }}
                />
                <Image
                    src={WieLogo}
                    alt='Wie LOGO'
                    style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: '60px'
                    }}
                />
            </div>
            <NewsSection />
            <GetToKnow />
            <EventDate />
            <TechChallenge />
            <Speakers />
            <Teams />
        </main>
    );
}
