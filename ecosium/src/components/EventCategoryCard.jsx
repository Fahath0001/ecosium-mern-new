import React, { useEffect, useState } from 'react';

const EventCategoryCard = (props) => {
    const { id, thumbnail, title, bgColor } = props.item;
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360); // Rotate from 0 to 360 degrees
        }, 30); // Smooth rotation

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='w-[120px] xs:w-[180px] sm:w-[210px] lg:w-[250px] xl:w-[270px] xxxl:w-[300px] h-full bg-black mr-[3px] md:mr-[6px] lg:mr-[12px] xxxl:mr-[15px] p-[3px] xxxxl:p-[6px] flex-grow'
            style={{
                backgroundImage: `linear-gradient(${bgColor})`,
            }}>
            <img className='w-full aspect-[1/1] object-cover' src={thumbnail} alt="" />
            <div className='w-full h-[60px] items-center justify-center flex bg-white mt:3px xxxl:mt-[6px]'>
                <p className='w-[90%] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text[18px] xl:text-[19px] xxxl:text-xl font-semibold py-[5px] text-center text-wrap line-clamp-2'>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default EventCategoryCard