import { ebTeams } from '@/constants/teams';
import Image from 'next/image';
import EventDate from './_components/event-date-section';
import GetToKnow from './_components/get-to-know-section';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import Speakers from './_components/speakers-section';
import TeamsSection from './_components/teams-section';
import TechChallenge from './_components/tech-challenge-section';
import ComSocLogo from '/public/images/sponsors/com-soc.webp';
import EspritLogo from '/public/images/sponsors/esprit.webp';
import FoundationLogo from '/public/images/sponsors/foundation.webp';
import IASLogo from '/public/images/sponsors/ias.webp';
import MttsLogo from '/public/images/sponsors/mtts.webp';
import SBLogo from '/public/images/sponsors/sb.webp';
import SectionLogo from '/public/images/sponsors/section.webp';
import SmcLogo from '/public/images/sponsors/smc.webp';
import StudentsLogo from '/public/images/sponsors/students.webp';
import WieSectionLogo from '/public/images/sponsors/wie-section.webp';
import WieLogo from '/public/images/sponsors/wie.webp';

export default function Home() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
            <div
                className='absolute top-0 right-0 md:w-[1500px] w-screen h-[1200px] bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/hero-bg.webp)`
                }}></div>
            <div
                className='absolute top-0 left-0 w-[250px] h-full bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/act.webp)`
                }}></div>

            <HeroSection />
            <div className='z-10 md:px-40 px-10'>
                <div className='overflow-x-scroll flex flex-row items-center gap-10 scrollbar-hide'>
                    <Image
                        src={StudentsLogo}
                        alt='Students LOGO'
                        style={{ width: 'auto', height: '40px' }}
                    />

                    <Image
                        src={FoundationLogo}
                        alt='Foundation Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={ComSocLogo}
                        alt='Com Soc LOGO'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={SmcLogo}
                        alt='SMC Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={MttsLogo}
                        alt='Mtts Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={IASLogo}
                        alt='IAS LOGO'
                        className='object-contain'
                    />
                    <Image
                        src={SectionLogo}
                        alt='Section Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={WieSectionLogo}
                        alt='Wie Section Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />

                    <Image
                        src={EspritLogo}
                        alt='Esprit Logo'
                        style={{ width: 'auto', height: '40px' }}
                    />
                    <Image
                        src={SBLogo}
                        alt='SB LOGO'
                        style={{ width: 'auto', height: '40px' }}
                    />

                    <Image
                        src={WieLogo}
                        alt='Wie LOGO'
                        style={{ width: 'auto', height: '40px' }}
                    />
                </div>
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
