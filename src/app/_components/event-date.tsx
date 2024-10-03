import SideVector from '@/../public/images/side-vector.svg';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const EventDate = () => {
    return (
        <section className='flex flex-row justify-between w-full '>
            <Image src={SideVector} alt='side vector' className='opacity-40' />
            <div className='flex flex-row justify-between w-full px-20'>
                <div className='flex flex-col items-center gap-2'>
                    <h4 className='text-5xl font-black'>
                        <span className='text-[#9747FF]'>12</span> October 2024
                    </h4>
                    <p className='text-2xl font-light'>10:00 AM</p>
                </div>
                <Separator
                    orientation='vertical'
                    className='h-full w-1 bg-foreground opacity-40'
                />
                <div className='flex flex-col items-center gap-2'>
                    <h4 className='text-5xl font-black'>
                        <span className='text-[#9747FF]'>13</span> October 2024
                    </h4>
                    <p className='text-2xl font-light'>2:00 PM</p>
                </div>
            </div>
            <Image src={SideVector} alt='side vector' className='opacity-40' />
        </section>
    );
};

export default EventDate;
