const EventDate = () => {
    return (
        <section
            id='event-date-section'
            className='flex flex-row flex-wrap justify-between w-full bg-gradient-to-r from-[#e0d8dc4d] via-[#65133b56] to-[#e0d8dc4d] rounded-[25px] py-10 md:px-64 px-10'>
            <div className='flex flex-col items-center gap-2'>
                <h4 className='md:text-5xl text-2xl font-bold text-white text-center'>
                    <span className='text-[#C2794F]'>12</span> October 2024
                </h4>
                <p className='text-2xl font-light text-white'>10:00 AM</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h4 className='md:text-5xl text-2xl font-bold text-white text-center'>
                    <span className='text-[#C2794F]'>13</span> October 2024
                </h4>
                <p className='text-2xl font-light text-white'>2:00 PM</p>
            </div>
        </section>
    );
};

export default EventDate;
