import { ebTeams, oc } from '@/constants/teams';
import TeamsSection from '../_components/teams-section';
import EspritSb from './_components/esprit-sb';
import HeroSection from './_components/hero-section';
import PreviousEditions from './_components/previous-editions';
import WieEsprit from './_components/wie-esprit';

export default function AboutUsPage() {
    return (
        <main className='flex flex-col md:gap-20 gap-20 py-20 bg-background'>
            <div
                className='absolute top-0 right-0 md:w-[981px] h-[954px] bg-cover bg-center bg-no-repeat rounded-t-lg '
                style={{
                    backgroundImage: `url(/images/hero-about-bg.png)`
                }}></div>

            <HeroSection />
            <PreviousEditions />
            <div
                className='w-full md:h-[800px] h-auto bg-cover bg-center bg-no-repeat rounded-t-lg md:-mt-40 -mt-20'
                style={{
                    backgroundImage: `url(/images/esprit.png)`
                }}></div>
            <EspritSb />
            <WieEsprit />
            <TeamsSection
                title='Our Teams'
                description='Get to know the dedicated team behind WIE ACT 3.0'
                teams={ebTeams}
            />
            {Object.entries(oc).map(([teamName, members]) => (
                <TeamsSection
                    key={teamName}
                    title={teamName}
                    teams={members as any}
                />
            ))}
        </main>
    );
}
