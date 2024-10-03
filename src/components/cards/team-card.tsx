import Image from 'next/image';

type Props = {
    name: string;
    description: string;
    imageUrl: string;
};

const TeamCard = ({ name, description, imageUrl }: Props) => {
    return (
        <div className='flex flex-col items-center self-center'>
            <Image
                src={imageUrl}
                width={250}
                height={250}
                alt={name}
                className='rounded-full w-60 h-60 object-cover mb-4 border-2 border-[#320290] p-2 '
            />
            <h4 className='text-2xl font-bold uppercase'>{name}</h4>
            <p className='text-sm opacity-60'>{description}</p>
        </div>
    );
};

export default TeamCard;
