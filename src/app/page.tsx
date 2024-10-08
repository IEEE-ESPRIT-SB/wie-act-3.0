import { ebTeams } from '@/constants/teams';
import Image from 'next/image';
import EventDate from './_components/event-date-section';
import GetToKnow from './_components/get-to-know-section';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import Speakers from './_components/speakers-section';
import TeamsSection from './_components/teams-section';
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
            <div
                className='absolute top-0 right-0 md:w-[1500px] w-screen h-[900px] bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/hero-bg.png)`
                }}></div>
            <div
                className='absolute top-0 left-0 w-[250px] h-full bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/act.png)`
                }}></div>

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
            <TeamsSection
                title='Our Teams'
                description='Get to know the dedicated team behind WIE ACT 3.0'
                teams={ebTeams}
            />
        </main>
    );
}
