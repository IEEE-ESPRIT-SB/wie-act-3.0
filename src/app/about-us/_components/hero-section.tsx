import Badge from '@/components/badge';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10 md:w-1/2 pt-36 z-[99] md:text-foreground text-white'>
            <Badge text='About Us' />
            <div className='flex flex-col gap-4'>
                <h2 className='md:text-6xl text-4xl font-bold'>WIE ACT 3.0</h2>
                <p className='md:text-lg md:py-10'>
                    WIE ACT 3.0, hosted by the IEEE WIE ESPRIT Student Branch
                    Affinity Group, is the leading event for empowering women in
                    engineering. This year&apos;s congress aims to encourage
                    creativity, diversity, and quality in the engineering
                    community. Participants will benefit from inspiring
                    speakers, hands-on workshops, and valuable networking
                    opportunities as they fight to revolutionize women&apos;s
                    privacy in the digital age. Join us as we embrace creativity
                    and make a lasting influence in the area of engineering.
                    Allow us to inspire, empower, and lead the future together!
                </p>
                <Image
                    className='md:block hidden'
                    src='/images/logo.webp'
                    width={100}
                    height={100}
                    alt='logo wie act'
                />
            </div>
        </section>
    );
}
