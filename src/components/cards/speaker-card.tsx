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
            <div className='flex flex-col gap-1 px-6 py-3 rounded-b-xl bg-gradient-to-l from-[#925775] to-[#65133a] bg-opacity-25'>
                <h4 className='text-2xl font-bold uppercase text-white'>
                    {name}
                </h4>
                <p className='text-sm text-white'>{description}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
