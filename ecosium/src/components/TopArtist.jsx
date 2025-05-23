import React, { useRef, useState } from 'react';
import artistsData from '../assets/artists'
import { assets } from '../assets/assets';

const TopArtist = () => {
    const scrollContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleMouseDown = (e) => {
        if (!scrollContainer.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainer.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX) * 1; // Adjust scrolling speed
        scrollContainer.current.scrollLeft = scrollLeft - walk;
        updateScrollPercentage();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleScroll = () => {
        updateScrollPercentage();
    };

    const updateScrollPercentage = () => {
        if (!scrollContainer.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollPercentage(percent.toFixed(2));
    };

    const handleNext = () => {
        if (!scrollContainer.current) return;
        scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" }); // Move by 200px
        setTimeout(updateScrollPercentage, 300); // Update progress bar after animation
    };

    const handleBack = () => {
        if (!scrollContainer.current) return;
        scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
        setTimeout(updateScrollPercentage, 300);
    };

    return (

        <>
            <div className='w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px]  items-center justify-center flex flex-col gap-[10px] py-[20px]'>
                <div className='w-full flex items-end justify-between'>
                    <h1 className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-2xl xxl:text-3xl font-bold'>
                        Top Artist
                    </h1>
                    <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-medium cursor-pointer'>
                        See All
                    </p>
                </div>
                <div
                    ref={scrollContainer}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    className='w-full h-auto gap-[5px] xxl:gap-[20px] items-center justify-start flex overflow-x-auto event-category mt-[20px]'>
                    {
                        artistsData.map((artist, i) => (
                            <div className='w-auto h-auto p-[4px] items-center justify-center flex flex-col gap-[3px] bg-gray-300 rounded-[5px] flex-grow'>
                                <div className="w-[150px] md-[190px] xxl:w-[230px] aspect-square overflow-hidden items-center justify-center flex rounded-[5px]">
                                    <img className='h-[100%] object-cover' src={artist.thumb} alt="" />
                                </div>
                                <div className="w-full items-center justify-center flex flex-col py-[5px] px-[8px] gap-[5px] bg-white rounded-[5px]">
                                   <h1 className='w-[90%] text-[14px] xs:text-[15px] xl:text-[15px] xxxl:text-xl font-semibold py-[5px] text-center text-wrap line-clamp-2'>
                                        {artist.name}
                                    </h1>
                                    <h2 className='text-sm font-medium text-primary'>
                                        {artist.followers} Follows
                                    </h2>
                                </div>

                            </div>

                        ))
                    }
                </div>
                {/* Event card Cursoul */}
                {/* Event card Cursoul */}
                {/* Event card Cursoul */}
                <div className='w-full h-auto items-center justify-between flex mt-[25px] '>

                    {/* Progress Bar */}
                    {/* Progress Bar */}
                    {/* Progress Bar */}
                    <div className='w-[150px] h-[4px] rounded-[2px] bg-gray-300 relative hidden lg:flex '>
                        <div className='w-[60px] h-[6px] rounded-[3px] bg-primary absolute top-[-1px]'
                            style={{ left: `${(scrollPercentage / 100) * 90}px` }}>
                        </div>
                    </div>

                    {/* Arrow Buton */}
                    {/* Arrow Buton */}
                    {/* Arrow Buton */}
                    <div className='w-auto h-auto items-center justify-center gap-6 hidden lg:flex'>
                        <button onClick={handleBack} className='p-[10px] rounded-2xl bg-gray-200 border-black event ' disabled={scrollPercentage <= 0}>
                            <img className='w-[25px] h-[25px] rotate-180' src={assets.arrow} alt="" />
                        </button>
                        <button onClick={handleNext} className='p-[10px] rounded-2xl bg-gray-200 border-black event' disabled={scrollPercentage >= 100}>
                            <img className='w-[25px] h-[25px]' src={assets.arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopArtist