const Badge = ({ text }: { text: string }) => {
    return (
        <span className='text-foreground font-semibold border border-foreground w-fit px-6 py-1 rounded-full'>
            {text}
        </span>
    );
};

export default Badge;
