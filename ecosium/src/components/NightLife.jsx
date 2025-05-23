import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { assets } from '../assets/assets'

const NightLife = () => {
      const navigate = useNavigate();
    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true
        })
        tl.to('#nightlife', {
            color: '#FF0000',
            ease: 'back.inOut',
            duration: 0.5
        }),
            tl.to('#nightlife', {
                color: '#FFA500',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#FFFF00',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#32CD32',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#008000',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#00FFFF',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#4B0082',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#9400D3',
                ease: 'back.inOut',
                duration: 0.5
            }),
            tl.to('#nightlife', {
                color: '#FF69B4',
                ease: 'back.inOut',
                duration: 0.5
            })

    }, [])
    return (
        <>
            <div className="w-full h-auto items-center justify-center flex py-[15px] md:py-[20px] xxl:py-[40px]">
                <div className="w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] h-auto bg-pink-300 rounded-xl xxxl:rounded-[30px] relative overflow-hidden">
                    <div className="w-full h-[450px] sm:h-[470px] md:h-[520px] xxxl:h-[500px] items-center justify-start xxl:justify-center flex flex-col z-10 mt-[100px] md:mt-[120px] gap-[15px] md:gap-[25px] xxl:gap-[30px]">
                        <h1 id='nightlife' className='text-[35px] xs:text-[45px] sm:text-[55px] md:text-[65px] lg:text-[75px] xxxl:text-[100px] font-black text-stroke z-10'>
                            Night Life
                        </h1>
                        <p className='w-[90%] text-[14px] xs:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xxxl:text-[24px] font-bold text-center text-black z-10'>
                            Experience the vibrant and exciting nightlife,
                            <br />
                            where unforgettable moments await.
                            <br />
                            Explore the city's best bars, clubs, and live music venues,
                            <br />
                            offering an atmosphere like no other.
                        </p>
                        <button  onClick={() => navigate('/nightlife')} className="py-[10px] px-[25px] bg-primary text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] xxl:text-[22px] font-bold text-white rounded-xl tracking-[1px] hover:tracking-[4px] transition-all duration-[500ms] z-10">
                            Explore
                        </button>
                        <div className="w-auto h-auto items-center justify-center flex py-[20px] xxxl:py-[30px] px-[20px] xxxl:px-[50px] clip-path-ellipse-custom bg-primary absolute top-0 left-[5px] xxxl:left-[20px] rounded-2xl">
                            <p className="text-[20px] sm:text-[21px] md:text-[22px] xxxl:text-[24px] text-center text-white font-bold">
                                <span className="text-lg sm:text-[20px] md:text-[26px] xxxl:text-[32px] font-black">
                                    18+
                                </span>
                                <br />
                                Only
                            </p>
                        </div>

                    </div>
                    <img className='h-[220px] sm:h-[280px]  md:h-[320px] lg:h-[430px] xxxl:h-[600px] absolute bottom-0 z-[0]' src={assets.dj} alt=" Dj" />
                    <img className='h-[160px] sm:h-[220px] md:h-[240px] lg:h-[300px] xxxl:h-[450px] absolute bottom-0 right-[-40px] z-[0]' src={assets.party} alt=" Dj" />
                </div>
            </div>
        </>
    )
}

export default NightLife