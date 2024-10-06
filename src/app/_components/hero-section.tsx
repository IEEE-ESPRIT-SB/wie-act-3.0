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
                In today&apos;s rapidly evolving digital landscape, the need for
                creativity and security has never been greater. The Women in
                Engineering Annual Congress of Tunisia 3.0, themed
                Revolutionizing Women’s Privacy in a Digital World, recognizes
                the power of female engineers in creating a safer digital
                future. This yearvs congress highlights the critical role of
                cybersecurity in safeguarding women&apos;s privacy, emphasizing
                how women are leading the development of secure technical
                solutions amidst growing digital risks.
            </p>
            <div className='flex gap-10 mt-10'>
                <Button size='lg'>Register Now</Button>
            </div>
        </section>
    );
};

export default HeroSection;
