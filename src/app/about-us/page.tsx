import EspritSb from './_components/esprit-sb';
import HeroSection from './_components/hero-section';
import PreviousEditions from './_components/previous-editions';
import WieEsprit from './_components/wie-esprit';

export default function AboutUsPage() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
            <div
                className='absolute top-0 right-0 w-[981px] h-[954px] bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/hero-about-bg.png)`
                }}></div>

            <HeroSection />
            <PreviousEditions />
            <div
                className='w-full h-[800px] bg-cover bg-center bg-no-repeat rounded-t-lg -mt-40'
                style={{
                    backgroundImage: `url(/images/esprit.png)`
                }}></div>
            <EspritSb />
            <WieEsprit />
        </main>
    );
}
