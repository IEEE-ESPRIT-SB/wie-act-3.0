import Badge from '@/components/badge';

export default function EspritSb() {
    return (
        <section className='flex flex-col items-center justify-center gap-10 md:px-40 px-10'>
            <Badge text='MEET your host' />
            <h2 className='md:text-6xl text-4xl font-bold'>IEEE ESPRIT SB</h2>
            <p className='md:text-lg md:w-1/2 md:text-center'>
                IEEE Esprit Student Branch is the largest SB in Tunisia Section
                as well as Region 8. Founded in 2017, IEEE ESPRIT Student Branch
                made its way to being ranked as the largest Student Branch in
                Tunisia Section as well as the Region 8. It includes 7 technical
                chapters (AESS, CIS, CS, IAS, IES, PES, MTTS, RAS) alongside two
                groups (SIGHT and WIE).
            </p>
        </section>
    );
}
