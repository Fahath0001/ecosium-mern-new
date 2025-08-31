import React from 'react'
import { weddingAssets } from '../../assets/wedding/weddingAssets'
import { assets } from '../../assets/assets'

const PlaceCart = () => {
    return (
        <>
            <div
                className='w-[calc(25%-20px)] min-w-[300px] items-center justify-center flex flex-col border-[1px] border-gray-200 rounded-lg p-[6px] bg-gray-50 gap-[10px]'
            >
                <div className='w-full aspect-[4/3] items-center justify-center overflow-hidden rounded-lg'>

                    <img
                        className='w-[100%] h-[100%] object-cover'
                        src={weddingAssets.WP01}
                        alt=""
                    />
                </div>
                <div className='w-full items-start justify-start flex flex-col'>
                    <h1
                        className='w-full text-xl font-semibold'
                    >
                        Party Place Hall
                    </h1>
                    <div className="w-full items-center justify-between flex ">

                        {
                            /* Place Cart Icon Deatails */
                            /* Place Cart Icon Deatails */
                            /* Place Cart Icon Deatails */
                        }
                        <div
                            className='w-[70%] items-start justify-center flex flex-col overflow-hidden rounded-lg gap-[5px]'
                        >

                            <div className='w-full items-center justify-start flex gap-[15px]'>
                                <img
                                    src={assets.area}
                                    className='w-[15px] h-[15px] object-cover'
                                    alt=""
                                />
                                <p>
                                    1000 sqr ft
                                </p>
                            </div>
                            <div className='w-full items-center justify-start flex gap-[15px]'>
                                <img
                                    src={assets.seats}
                                    className='w-[15px] h-[15px] object-cover'
                                    alt=""
                                />
                                <p>
                                    250 Seats
                                </p>
                            </div>
                            <div className='w-full items-center justify-start flex gap-[15px]'>
                                <img
                                    src={assets.locationBlack}
                                    className='w-[15px] h-[15px] object-cover'
                                    alt=""
                                />
                                <p>
                                    BurDubai UAE
                                </p>
                            </div>
                        </div>
                        {
                            /* Place Cart Enquiry */
                            /* Place Cart Enquiry */
                            /* Place Cart Enquiry */
                        }
                        <div
                            className='w-[30%] h-full items-end justify-end flex flex-col gap-[10px]'
                        >
                            <div
                                className='bg-primary rounded-lg'
                            >
                                <p
                                    className='px-[10px] py-[8px] text-white text-[16px] font-semibold'
                                >
                                    3.5/5
                                </p>
                            </div>
                            <button
                                className='px-[10px] py-[8px] text-white text-[16px] font-semibold bg-primary rounded-lg'
                            >
                                More Deatils
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlaceCart