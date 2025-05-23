import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Events from '../components/Events'
import TopArtist from '../components/TopArtist'
import NightLifeHero from '../assets/NightLifeHero'

const NightLifePage = () => {
  return (
    <>
      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Hero heroData={NightLifeHero} />
        <Categories type={'night life'} hedding={'Our Category'} />
        <Events type={'events'} hedding={'Top Events'} />
        {/* Party Promotions */}
        {/* Party Promotions */}
        {/* Party Promotions */}
        <div className="w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] items-center justify-center flex flex-col gap-[20px] bg-pink-300 py-[30px]  xxxl:py-[40px] px-[10px] xxl:px-[20px] rounded-xl border-[2px] border-gray-300">
          <div className='w-full'>
            <h1 className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[65px] xxl:text-[75px] xxxl:text-[80px] font-bold text-white text-center'>
              Pool Party
            </h1>
          </div>
          <div className="w-full h-auto items-stretch justify-center flex flex-col xxl:flex-row overflow-hidden">
            <div className='w-full xxl:w-[35%] h-auto items-center justify-center flex flex-grow overflow-hidden '>
              <video
                className="w-full h-full overflow-hidden"
                src={assets.promo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className='w-full xxl:w-[calc(65%-30px)] h-auto items-center justify-between flex xxl:flex-grow flex-wrap gap-[5px] py-[10px] xxl:px-[20px] xxl:py-[30px] overflow-hidden '>
              <img className='w-[calc(50%-3px)] aspect-[1/1] object-cover' src={assets.N1} alt="" />
              <img className='w-[calc(50%-3px)] aspect-[1/1] object-cover ' src={assets.N2} alt="" />
              <img className='w-[calc(50%-3px)] aspect-[1/1] object-cover ' src={assets.N3} alt="" />
              <img className='w-[calc(50%-3px)] aspect-[1/1] object-cover ' src={assets.N4} alt="" />
            </div>
          </div>

          <Events type={'events'} hedding={'Top Events'} />
        </div>
      </div>

    </>
  )
}

export default NightLifePage