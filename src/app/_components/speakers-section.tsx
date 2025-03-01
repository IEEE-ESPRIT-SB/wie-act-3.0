import Badge from '@/components/badge';
import SpeakerCard from '@/components/cards/speaker-card';
import { speakers } from '@/constants/speakers';

const Speakers = () => {
    return (
        <section
            id='speakers-section'
            className='flex flex-col gap-10 md:px-40 px-10 w-full'>
            <div className='flex flex-col gap-4'>
                <Badge text='Our Speakers' />
                <h4 className='md:text-5xl text-4xl font-bold uppercase'>
                    Speaker Lineup
                </h4>
            </div>
            <div className='flex md:flex-row flex-col overflow-x-auto overflow-y-hidden md:items-start items-center gap-10 py-10'>
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        description={speaker.description}
                        imageUrl={speaker.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Speakers;
