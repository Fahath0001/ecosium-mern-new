import React, { useEffect, useRef, useState } from 'react';
import eventCategory from '../assets/eventCategory';
import nightCategory from '../assets/NightCategory.js';
import EventCategoryCard from './eventCategoryCard.jsx';
import attrectionCategory from '../assets/attrectionCategory.js';
import { assets } from '../assets/assets';


const Categories = ({ type, hedding }) => {
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [categoryData, setCategoryData] = useState([]);


  useEffect(() => {
    if (type === "event") {
      setCategoryData(eventCategory);
    }
    if (type === "night life") {
      setCategoryData(nightCategory);
    }
     if (type === "attrection") {
      setCategoryData(attrectionCategory);
    }

  }, [type]);

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
      <div className='w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] flex flex-col items-center justify-center mt-[15px] sm:mt-[20px] lg:mt-[25px] xl:mt-[30px] xxl:mt-[35px] xxxl:mt-10 mb-[15px] sm:mb-[20px] lg:mb-[25px] xl:mb-[30px] xxl:mb-[35px] xxxl:mb-[40px] whitespace-nowrap scrollbar-none cursor-grab select-none '>
        {/* Event Category Headdings */}
        {/* Event Category Headdings */}
        {/* Event Category Headdings */}
        <div className='w-full flex items-end justify-between'>
          <h1 className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-2xl xxl:text-3xl font-bold'>
            {hedding}
          </h1>
          <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-medium cursor-pointer'>
            See All
          </p>
        </div>

        {/* Event card Cursoul */}
        {/* Event card Cursoul */}
        {/* Event card Cursoul */}
        <div
          ref={scrollContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          className='w-full h-auto gap-[5px] items-center justify-start flex overflow-x-auto event-category mt-[15px] sm:mt-[20px] lg:mt-[25] xxxl:mt-[30px]'>
          <div className='w-auto h-full relative items-stretch justify-start flex'>
            {
              categoryData.map((item, i) => (
                <EventCategoryCard item={item} key={i} />
              ))
            }
          </div>
        </div>

        {/* Event card Cursoul */}
        {/* Event card Cursoul */}
        {/* Event card Cursoul */}
        <div className='w-full h-auto items-center justify-between flex mt-[30px] '>

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
      </div >
    </>
  )
}

export default Categories