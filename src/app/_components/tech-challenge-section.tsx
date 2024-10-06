import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TechChallenge = () => {
    return (
        <section
            id='tech-challenge-section'
            className='md:pl-40 md:px-0 px-10 flex flex-row items-center gap-40 relative'>
            <div className='flex flex-col gap-10 flex-1'>
                <Badge text='Technical Challenge' />
                <div className='flex flex-col gap-4'>
                    <h2 className='md:text-6xl text-4xl font-bold'>
                        Rise to the Challenge
                    </h2>
                    <p className='md:text-lg md:py-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod{' '}
                    </p>
                </div>
                <div className='flex'>
                    <Button size='lg' className='pr-4 py-6'>
                        Learn More
                        <ChevronRight size={24} className='ml-4' />
                    </Button>
                </div>
            </div>
            <Image
                className='md:block hidden'
                src='/images/challenge.png'
                width={800}
                height={400}
                alt='Tech Challenge'
            />
        </section>
    );
};

export default TechChallenge;
