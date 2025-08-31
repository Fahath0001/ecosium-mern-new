import React from 'react'
import { weddingAssets } from '../../assets/wedding/weddingAssets'

const CakeCard = () => {
    return (
        <>
            <div
                className='w-[30%] h-auto items-center justify-center flex flex-col p-[5px] bg-gray-200 rounded-xl gap-[4px]'
            >

                <div
                    className="w-full  aspect-square items-center justify-center flex overflow-hidden rounded-xl"
                >
                    <img
                        src={weddingAssets.WeddingCartCake}
                        className='w-[100%] h-[100%] object-cover'
                        alt=""
                    />
                </div>

                <div
                    className="w-full items-center justify-center flex flex-col"
                >

                    <h1
                        className='text-lg font-semibold text-wrap w-full'
                    >
                        Avengers Thor Print Cake
                    </h1>
                    <div
                        className='w-full h-auto items-center justify-between flex my-[5px]'
                    >
                        <h2
                            className='text-[18px]'
                        >
                            1Kg
                        </h2>
                        <h2
                            className='text-[18px] font-semibold '
                        >
                            240 Aed
                        </h2>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CakeCard