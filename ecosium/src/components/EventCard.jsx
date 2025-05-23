import React, { useEffect, useState } from 'react'
import FormatDate from './formatDate';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const EventCard = (props) => {
    const [wishList, setWishList] = useState(false);
    const { id, thumbnail, media, name, priceDate, isExclusive, isFastsell, slug } = props.event;
    console.log(wishList);


    return (
        <>
            <div className='w-full lg:w-[calc(50%-10px)] xl:w-[calc(33%-15px)]  xxxl:w-[calc(25%-17px)] h-auto items-center justify-center flex flex-col p-[6px] bg-slate-100 relative'>
                <button onClick={() => (setWishList(!wishList))} className='p-[7px] bg-gray-200 items-center justify-center flex absolute top-[9px] right-[9px] rounded-[5px] z-10'>
                    {
                        wishList ? (
                            <img className='w-[30px]  ' src={assets.whislistred} alt="Whishlist" />
                        ) : (
                            <img className='w-[30px]  ' src={assets.whislist} alt="Whishlist" />
                        )
                    }
                </button>
                <NavLink to={`/${slug}/${id}`} className='h-full aspect-[16/9]  items-center justify-center flex relative'>
                    <img className='w-full h-full  object-cover' src={thumbnail} alt="Thumbnail " />
                    <div className='items-center justify-center flex px-[8px] py-[3px] rounded-[5px] absolute bg-gray-200 bottom-[3px] right-[3px] gap-[10px]' >
                        {
                            priceDate[0].was ? (
                                <>
                                    <div className='items-center justify-center flex gap-[5px]'>
                                        <img className='w-[20px]' src={assets.aed} alt="" />
                                        <p className='text-md font-medium line-through '>
                                            {priceDate[0].was.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className='items-center justify-center flex gap-[5px]'>
                                        <img className='w-[20px]' src={assets.aed} alt="" />
                                        <p className='text-md font-semibold'>
                                            {priceDate[0].now.toFixed(2)}
                                        </p>
                                    </div>

                                </>
                            ) : (

                                <div className='items-center justify-center flex gap-[5px]'>
                                    <img className='w-[20px]' src={assets.aed} alt="" />
                                    <p className='text-md font-medium'>
                                        {priceDate[0].now.toFixed(2)}
                                    </p>
                                </div>

                            )

                        }
                    </div>
                    <div className='items-center justify-center flex absolute top-[3px] left-[3px] gap-[5px]'>
                        {
                            isExclusive ? (
                                <div className='py-[5px] px-[10px] items-center justify-center flex  bg-primary rounded-full'>
                                    <p className='text-[14px] font-medium text-white'>Exclusive</p>
                                </div>
                            ) : (
                                ""
                            )
                        }
                        {
                            isFastsell ? (

                                <div className='py-[5px] px-[10px] items-center justify-center flex bg-yellow-400 rounded-full'>
                                    <p className='text-[14px] font-medium text-white'>Fast Sell</p>
                                </div>
                            ) : (
                                ""
                            )
                        }
                    </div>
                </NavLink>
                <NavLink to={`/${slug}/${id}`} className='w-full h-auto items-start justify-center flex flex-col p-[6px] mt-[6px] bg-white'>
                    <h1 className='text-[18px] font-medium truncate w-[95%]'>
                        {name}
                    </h1>
                    <p className='text-[16px] font-sm mt-[5px]'>
                        <FormatDate dateString={priceDate[0].date} />
                    </p>
                </NavLink>
            </div>
        </>
    )
}

export default EventCard