
import React, { useEffect, useState } from 'react';

const MainCategory = (props) => {
    const { id, title, dis, thumbnail, bgColor } = props.item
    const [rotation, setRotation] = useState(0);


    const height = Number(props.height);

    //console.log("Fahath Height:", height);

    const safeHeight = isFinite(height) && height > 0 ? `${height}px` : "auto";

    //console.log("Applying style height:", safeHeight);




    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360); 
        }, 30); // Smooth rotation

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            {/* Main Category */}
            {/* Main Category */}
            {/* Main Category */}
            <div
                className='w-[400px] h-full mr-[20px] rounded-xl items-center justify-start flex flex-col'
                style={{
                    backgroundImage: `linear-gradient(${bgColor})`,
                    height: safeHeight,
                }}
            >
                <div
                    className='w-[250px]  aspect-[1/1] items-center justify-center flex overflow-hidden'
                >
                    <img className=' object-center' src={thumbnail} alt="Icon" />
                </div>
                <h1
                    className='text-[30px] font-semibold tracking-[1px]'
                >
                    {title}
                </h1>
                <p className='w-[90%] py-[10px] text-wrap text-center text-[20px]'>
                    {
                        dis
                    }

                </p>

            </div>

        </>
    )
}

export default MainCategory