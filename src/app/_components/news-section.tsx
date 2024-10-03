import Badge from '@/components/badge';
import PostCard from '@/components/cards/post-card';
import { events } from '@/constants/events';

const NewsSection = () => {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10'>
            <div className='flex flex-col gap-4'>
                <Badge text='Latest News' />
                <h4 className='md:text-5xl text-4xl font-black'>
                    Stay Updated With Our News
                </h4>
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
