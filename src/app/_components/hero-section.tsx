import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CsLogo from '/public/images/cs.png';
import CstamLogo from '/public/images/cstam.png';
import SbLogo from '/public/images/sb.png';
import SectionLogo from '/public/images/section.png';

const HeroSection = () => {
    return (
        <section className='h-screen w-full flex flex-col justify-center md:px-40 px-10 relative'>
            <h4 className='uppercase md:text-lg font-medium'>
                #1 cs Tunisian annual meeting
            </h4>
            <h1 className='md:text-8xl text-6xl font-black'>CSTAM 1.0</h1>
            <p className='md:text-lg md:mt-10 mt-5 md:max-w-[600px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
            </p>
            <div className='flex gap-10 mt-10'>
                <Button size='lg'>Register Now</Button>
                <Button variant='secondary' size='lg'>
                    Get in touch
                </Button>
            </div>

            <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-20 overflow-x-auto overflow-hidden'>
                <Image src={CstamLogo} alt='CSTAM LOGO' height={60} />
                <Image src={CsLogo} alt='CS LOGO' height={60} />
                <Image src={SbLogo} alt='SB LOGO' height={60} />
                <Image src={SectionLogo} alt='Section LOGO' height={60} />
            </div>
        </section>
    );
};

export default HeroSection;
