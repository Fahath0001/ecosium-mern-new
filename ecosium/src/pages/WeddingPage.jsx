import React from 'react'
import Hero from '../components/Hero'
import heroData from '../assets/assets'
import { weddingData } from '../assets/weddingData'
import CategorySlide from '../components/CategorySlide'
import WeddingPart from '../components/Wedding/WeddingPart'
import WeddingCakes from '../components/Wedding/WeddingCakes'

const WeddingPage = () => {
    return (
        <>
            <div className="w-full items-center justify-center flex flex-col">
                <Hero heroData={weddingData} />
                <div className='w-[80%] flex flex-col items-center justify-center '>
                    <CategorySlide type={'weddingcategory'} hedding={'Wedding Category'} />
                    <WeddingPart type={'events'} hedding={'Recomended Wedding Place'} />
                    <WeddingCakes />
                </div>
            </div >
        </>
    )
}

export default WeddingPage