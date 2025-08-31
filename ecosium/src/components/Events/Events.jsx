import eventsData from '../../assets/eventsData';
import EventCard from './EventCard';



const Events = ({ type, hedding }) => {
    let dataSet;
    if (type === "events") {
        dataSet = eventsData;
    } else {
        return <div>Invalid category</div>;
    }


    return (
        <>
            <div className='w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] flex flex-col items-center justify-center mt-[15px] sm:mt-[20px] lg:mt-[25px] xl:mt-[30px] xxl:mt-[35px] xxxl:mt-10 mb-[15px] sm:mb-[20px] lg:mb-[25px] xl:mb-[30px] xxl:mb-[35px] xxxl:mb-[40px] whitespace-nowrap scrollbar-none cursor-grab select-none '>
                <div className='w-full flex items-end justify-between'>
                    <h1 className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-2xl xxl:text-3xl font-bold'>
                        {hedding}
                    </h1>
                    <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-medium cursor-pointer'>
                        See All
                    </p>
                </div>
                <div className='w-full h-auto items-center justify-between flex flex-wrap py-[10px] gap-[20px]'>
                    {
                        eventsData.map((event, i) => (
                            <EventCard event={event} key={i} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Events