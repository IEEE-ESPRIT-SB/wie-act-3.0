import GetToKnow from './_components/get-to-know';
import HeroSection from './_components/hero-section';
import NewsSection from './_components/news-section';
import Speakers from './_components/speakers';
import Teams from './_components/teams';
import TechChallenge from './_components/tech-challenge';

export default function Home() {
    return (
        <>
            <HeroSection />
            <NewsSection />
            <GetToKnow />
            {/* <EventDate /> */}
            <TechChallenge />
            <Speakers />
            <Teams />
        </>
    );
}
