import Image from 'next/image';

type Props = {
    title: string;
    description: string;
    image: string;
    logo: string;
};

export default function EditionCard({
    title,
    description,
    image,
    logo
}: Readonly<Props>) {
    return (
        <div className='md:w-[400px] w-full bg-primary rounded-lg text-white z-20 flex flex-col justify-between'>
            <div
                className='w-full h-[250px] bg-cover bg-center bg-no-repeat rounded-t-lg'
                style={{
                    backgroundImage: `url(${image})`
                }}></div>
            <div className='flex flex-col justify-between gap-10 px-10 py-4'>
                <div className=' flex flex-col gap-4'>
                    <h2 className='text-4xl font-bold uppercase'>{title}</h2>
                    <p className='font-light'>{description}</p>
                </div>
            </div>{' '}
            <div className='flex px-10 py-4'>
                <Image src={logo} alt={title} width={70} height={70} />
            </div>
        </div>
    );
}
