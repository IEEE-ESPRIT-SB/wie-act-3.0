import Image from 'next/image';
import EventDate from './_components/event-date';
import GetToKnow from './_components/get-to-know';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import ComSocLogo from '/public/images/sponsors/com-soc.png';
import FoundationLogo from '/public/images/sponsors/foundation.png';
import IASLogo from '/public/images/sponsors/ias.png';
import SBLogo from '/public/images/sponsors/sb.png';
import StudentsLogo from '/public/images/sponsors/students.png';
import WieLogo from '/public/images/sponsors/wie.png';

export default function Home() {
    return (
        <main className='flex flex-col md:gap-40 gap-20 py-20 bg-background'>
            <HeroSection />
            <div className='flex justify-center gap-20 overflow-x-auto overflow-hidden z-10 '>
                <Image src={ComSocLogo} alt='Com Soc LOGO' height={40} />
                <Image src={FoundationLogo} alt='Foundation Logo' height={40} />
                <Image src={IASLogo} alt='IAS LOGO' height={40} />
                <Image src={SBLogo} alt='SB LOGO' height={40} />
                <Image src={StudentsLogo} alt='Students LOGO' height={40} />
                <Image src={WieLogo} alt='Wie LOGO' height={40} />
            </div>
            <NewsSection />
            <GetToKnow />
            <EventDate />
            {/* <TechChallenge />
            <Speakers />
            <Teams /> */}
        </main>
    );
}
