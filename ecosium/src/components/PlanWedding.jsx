import React from 'react'
import { assetsHome } from '../assets/MainData'

const PlanWedding = () => {
    return (
        <div
            className="w-full 
                       h-auto 
                       bg-[linear-gradient(65deg,_#C62068,_#F26CA7)]
                       rounded-xl
                       my-[5%]
                       py-[40px]
                       items-center justify-center flex"
        >
            <div
                className='w-full
                           gap-[30px] 
                           p-[40px]
                           items-stretch justify-between flex'
            >
                <div className="w-[40%]
                                h-[300px]
                                items-center justify-center flex ">
                    <img
                        src={assetsHome.planeWedding}
                        alt=""
                        className='h-[180%]
                                   rotate-[-20deg]
                                   object-cover '
                    />

                </div>
                <div className='w-[60%]
                                gap-[25px]
                                flex-col
                                items-start justify-center flex'
                >
                    <h1 className='text-[56px]
                                   font-semibold 
                                   text-white'
                    >
                        Plan the Wedding Day, we perfect the Details
                    </h1>
                    <p className='w-[90%]
                                  text-[18px]
                                  font-medium
                                  text-white'
                    >
                        Make your special day unforgettable with our all-in-one wedding services. From stunning cakes, stylish decorations to beautiful venues, party foods, and more — we take care of every detail for unforgettable journey.
                    </p>
                    <button
                        className='py-[10px]
                                   px-[40px]
                                   text-[18px]
                                   font-semibold
                                   trackng-[1px]
                                   bg-primary rounded-lg  text-white '
                    >
                        More
                    </button>

                </div>

            </div>

        </div>
    )
}

export default PlanWedding