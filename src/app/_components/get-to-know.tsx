import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const GetToKnow = () => {
    return (
        <section
            className='flex flex-row mx:px-40 px-10 py-40 bg-center bg-cover bg-no-repeat w-full'
            style={{
                backgroundImage: `url('/images/about-bg.png')`
            }}>
            <div className='flex-1'></div>
            <div className='flex flex-col gap-10 flex-1'>
                <div className='flex flex-col gap-4'>
                    <Badge text='About The Event' />
                    <h4 className='md:text-5xl text-4xl font-bold uppercase'>
                        Get to know wie act
                    </h4>
                </div>
                <p className='md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod
                </p>
                <div className='flex'>
                    <Button size='lg' className='pr-4 py-6'>
                        Learn More
                        <ChevronRight size={24} className='ml-4' />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default GetToKnow;
