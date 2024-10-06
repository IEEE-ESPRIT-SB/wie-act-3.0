import Badge from '@/components/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const GetToKnow = () => {
    return (
        <section
            id='get-to-know-section'
            className='flex flex-row md:px-40 px-10 py-40 bg-center bg-cover bg-no-repeat w-full'
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
                    The Women in Engineering Annual Congress of Tunisia (WIE
                    ACT) is an inspiring event that brings together creative
                    minds from engineering, technology, and development. Our
                    objective is to support women in engineering through
                    providing an environment for information sharing,
                    networking, and professional development.
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
