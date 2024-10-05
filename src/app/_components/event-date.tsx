const EventDate = () => {
    return (
        <section className='flex flex-row justify-between w-full bg-gradient-to-r from-[#e0d8dc4d] via-[#65133b56] to-[#e0d8dc4d] rounded-[25px] py-10 px-32'>
            <div className='flex flex-row justify-between w-full px-20'>
                <div className='flex flex-col items-center gap-2'>
                    <h4 className='text-5xl font-bold text-white'>
                        <span className='text-[#C2794F]'>12</span> October 2024
                    </h4>
                    <p className='text-2xl font-light text-white'>10:00 AM</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h4 className='text-5xl font-bold text-white'>
                        <span className='text-[#C2794F]'>13</span> October 2024
                    </h4>
                    <p className='text-2xl font-light text-white'>2:00 PM</p>
                </div>
            </div>
        </section>
    );
};

export default EventDate;
