import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <section
            id='hero-section'
            className='h-screen w-full flex flex-col justify-center md:px-40 px-10 relative'>
            <h1 className='md:text-8xl text-6xl font-black uppercase'>
                wie act 3.0
            </h1>
            <h1 className='md:text-2xl text-xl font-black uppercase'>
                women in engineering annual congress of tunisia
            </h1>
            <p className='md:text-lg md:mt-10 mt-5 md:max-w-[600px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <div className='flex gap-10 mt-10'>
                <Button size='lg'>Register Now</Button>
            </div>
        </section>
    );
};

export default HeroSection;
