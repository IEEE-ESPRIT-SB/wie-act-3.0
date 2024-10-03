import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const GetToKnow = () => {
    return (
        <section
            className='pt-32 flex flex-col gap-10 justify-center mx:px-40 px-10 bg-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: `url('/images/get-to-know.png')`,
                height: '800px'
            }}>
            <div className='flex flex-col gap-4'>
                <Badge text='About The Event' />
                <h4 className='md:text-5xl text-4xl font-black md:w-1/2'>
                    Get To Know More About CSTAM
                </h4>
            </div>
            <p className='md:text-xl md:w-1/2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod
            </p>
            <div className='flex'>
                <Button size='lg' className='pr-4 py-6'>
                    Learn More
                    <ChevronRight size={24} className='ml-4' />
                </Button>
            </div>
        </section>
    );
};

export default GetToKnow;
