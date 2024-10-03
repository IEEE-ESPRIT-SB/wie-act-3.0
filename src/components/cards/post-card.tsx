type Props = {
    imageUrl: string;
    eventName: string;
    category: string;
};

const PostCard = ({ imageUrl, eventName, category }: Props) => {
    return (
        <div
            className='w-[250px] h-[330px] duration-300 px-4 py-2 flex flex-col justify-end bg-cover bg-center bg-no-repeat self-center'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${imageUrl})`
            }}>
            <span className='text-foreground font-semibold w-fit text-sm px-4 py-1 bg-primary rounded-full'>
                {category}
            </span>
            <h4 className='text-xl font-medium'>{eventName}</h4>
        </div>
    );
};

export default PostCard;
