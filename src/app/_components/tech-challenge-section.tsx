import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TechChallenge = () => {
    return (
        <section
            id='tech-challenge-section'
            className='md:pl-40 md:px-0 px-10 flex flex-row items-center gap-40 relative'>
            <div className='flex flex-col gap-10 flex-1'>
                <Badge text='Technical Challenge' />
                <div className='flex flex-col gap-4'>
                    <h2 className='md:text-6xl text-4xl font-bold uppercase'>
                        Rise to the Challenge
                    </h2>
                    <p className='md:text-lg md:py-10'>
                        The WIE ACT Tech Challenge is a dynamic competition
                        focused on the essential subjects of cybersecurity and
                        artificial intelligence. Its mission is to foster
                        development in digital safety for women. Participants
                        will tackle actual issues while building AI-driven
                        solutions and cybersecurity strategies to protect women
                        in a constantly shifting digital context. This challenge
                        not only tests technical abilities, but it also
                        encourages creative problem-solving, resulting in a
                        safer, more inclusive digital environment.
                    </p>
                </div>
                <div className='flex'>
                    <Link
                        href='https://drive.google.com/file/d/1ZyvcUqeyCe8Xr-8iXXSlFroEYhdXqsNb/view'
                        target='_blank'>
                        <Button size='lg' className='pr-4 py-6'>
                            Learn More
                            <ChevronRight size={24} className='ml-4' />
                        </Button>
                    </Link>
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
