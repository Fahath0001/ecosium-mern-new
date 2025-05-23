import React from 'react'
import Hero from '../components/Hero'
import attractionData from '../assets/attractionData'
import Categories from '../components/Categories'

const Attractions = () => {
    return (
        <>
            <div className='w-full h-auto items-center justify-center flex flex-col'>
                <Hero heroData={attractionData} />
                <Categories type={'attrection'} hedding={'Our Category'} />
            </div >
        </>
    )
}

export default Attractions