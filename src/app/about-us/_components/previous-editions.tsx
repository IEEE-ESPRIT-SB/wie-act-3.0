import Badge from '@/components/badge';
import EditionCard from './edition-card';

export default function PreviousEditions() {
    return (
        <section className='flex flex-col gap-10 md:px-40 px-10'>
            <Badge text='PREVIOUS VERSIONS' />
            <h2 className='md:text-6xl text-4xl font-bold'>
                WIE ACT 1.0 & 2.0
            </h2>

            <div className='flex flex-row gap-20 w-full justify-center items-center'>
                <EditionCard
                    title='wie act 1.0'
                    description="The inaugural IEEE WIE Congress in Tunisia celebrated the exceptional achievements of STEM professionals and sparked women's empowerment, enabling them to thrive in their industries. With the slogan 'Honoring the Past and Inspiring the Future', WIE ACT 1.0 featured inspiring speakers, entertaining competitions, and delightful surprises, providing a remarkable experience."
                    image='/images/editions/wie-act-1.png'
                    logo='/images/editions/wie-act-1-logo.png'
                />
                <EditionCard
                    title='wie act 2.0'
                    description="The second edition of the Annual Women In Engineering Congress of Tunisia (WIE ACT 2.0) built on its predecessor's success, hosted by IEEE WIE ENETCOM SAG & IEEE WIE ENIS SAG, in partnership with the IEEE WIE Tunisia section. WIE ACT 2.0 celebrated innovation, collaboration, and excellence with engaging workshops, stimulating sessions, thrilling competitions, and vibrant celebrations. Its success inspires us as we plan the next edition with enthusiasm and determination."
                    image='/images/editions/wie-act-2.png'
                    logo='/images/editions/wie-act-2-logo.png'
                />
            </div>
        </section>
    );
}
