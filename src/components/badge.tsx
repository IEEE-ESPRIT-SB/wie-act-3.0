const Badge = ({ text }: { text: string }) => {
    return (
        <span className='text-foreground font-bold uppercase bg-[#9B9B9B] text-[#3A3A3A] px-6 py-2 rounded-full w-fit'>
            {text}
        </span>
    );
};

export default Badge;
