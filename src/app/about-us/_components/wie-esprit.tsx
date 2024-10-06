import Image from 'next/image';

export default function WieEsprit() {
    return (
        <section className='flex md:flex-row flex-col justify-center items-center gap-10 md:px-40 px-10'>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                    src='/images/wie-logo.png'
                    width={500}
                    height={500}
                    alt='logo wie act'
                />
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <h2 className='md:text-6xl text-4xl font-bold'>
                    IEEE ESPRIT WIE SB affinity group
                </h2>
                <p className='md:text-lg md:py-10'>
                    WIE student branch chapter is a community of students
                    dedicated to promoting gender diversity and empowering women
                    in the field of engineering. This chapter focuses on
                    creating opportunities for networking, mentorship, and
                    professional development for female engineering students.
                    Through workshops, seminars, and events, members gain
                    valuable skills and support to thrive in their engineering
                    careers. Join the WIE student branch to connect with fellow
                    women in engineering, foster personal growth, and make a
                    positive impact in the field.
                </p>
            </div>
        </section>
    );
}
