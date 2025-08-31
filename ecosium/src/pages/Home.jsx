import React from 'react'
import Hero from '../components/Hero'
import heroData from '../assets/assets'
import CategorySlide from '../components/CategorySlide'
import PlanWedding from '../components/PlanWedding'
import CardSlider from '../components/CardSlider'

const Home = () => {
  return (
    <>
      <div className='w-full h-auto items-center justify-center flex flex-col'>
        <Hero heroData={heroData} />
        <div className='w-[80%] flex flex-col items-center justify-center'>
          {/* Main Category Headdings */}
          {/* Main Category Headdings */}
          {/* Main Category Headdings */}

          <CategorySlide type={'main'} hedding={'Our Category'} />
          <CardSlider type={'main'} hedding={'Our Popular Events'} />
          <PlanWedding />
        </div>
      </div>
    </>
  )
}

export default Home