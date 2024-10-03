type Props = {
    name: string;
    description: string;
    imageUrl: string;
};

const SpeakerCard = ({ name, description, imageUrl }: Props) => {
    return (
        <div
            className='w-[250px] h-[330px] duration-300 flex flex-col justify-end bg-cover bg-center bg-no-repeat self-center rounded-xl'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${imageUrl})`
            }}>
            <div
                className='flex flex-col gap-1 bg-gradient-to-l px-6 py-3 rounded-b-xl'
                style={{
                    background:
                        'linear-gradient(to left, rgba(110, 0, 253, 0.6), rgba(49, 16, 4, 0.6))'
                }}>
                <h4 className='text-2xl font-bold uppercase'>{name}</h4>
                <p className='text-sm font-medium'>{description}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
