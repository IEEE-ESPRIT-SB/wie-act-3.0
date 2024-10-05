import Badge from '@/components/badge';
import PostCard from '@/components/cards/post-card';
import { events } from '@/constants/events';

const NewsSection = () => {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10 z-40'>
            <div className='inline-flex items-center justify-between'>
                <h4 className='md:text-5xl text-4xl font-black uppercase'>
                    Congress Updates
                </h4>
                <Badge text='See All' />
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between gap-10'>
                {events.map((event, index) => (
                    <PostCard
                        key={index}
                        imageUrl={event.imageUrl}
                        eventName={event.eventName}
                        category={event.category}
                    />
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
