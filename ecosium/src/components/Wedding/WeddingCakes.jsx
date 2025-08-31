import React from 'react'
import { weddingAssets } from '../../assets/wedding/weddingAssets'
import CakeCard from './CakeCard'

const WeddingCakes = () => {
    return (
        <>
            <div
                className='w-full items-center justify-between flex  py-[30px]'
            >
                {
                    /* Cake Add sections */
                    /* Cake Add sections */
                    /* Cake Add sections */
                }

                <div
                    className='w-[30%] aspect-square items-center justify-center flex rounded-lg border-[1px] border-gray-400'
                >
                    <img
                        className='object-cover w-[100%] h-[100%]'
                        src={weddingAssets.weddingCake}
                        alt=""
                    />
                </div>
                <div className='w-[70%] h-[100%] items-center justify-center flex flex-wrap'>
                    <CakeCard />
                </div>
            </div>
        </>
    )
}

export default WeddingCakes