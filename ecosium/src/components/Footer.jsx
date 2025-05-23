import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <>
            <div className='w-full h-auto items-center justify-center flex flex-col bg-white'>
                {/* Do You Have Question */}
                <div className='w-full h-auto  py-[20px] items-center justify-center flex'>
                    <div className='w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px]  h-auto items-stretch justify-center flex flex-col gap-[15px]  '>
                        <div className='w-full'>
                            <p className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-2xl xxl:text-3xl font-semibold pl-[10px]'>
                                Do you have any questions?
                            </p>
                        </div>
                        <div className='w-full h-auto items-stretch justify-between flex flex-col xxl:flex-row gap-[25px]'>
                            <div className='w-full xl:w-[30%] h-auto items-start justify-start flex flex-col gap-[10px] bg-gray-50 py-[10px] xl:py-[15px] px-[10px] xl:px-[25px] rounded-2xl flex-grow '>
                                <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-semibold'>
                                    Please contact us
                                </p>
                                <div className="w-full h-auto items-center justify-start flex gap-[20px]">
                                    <button className='items-center justify-center px-[12px] py-[8px] flex gap-[15px] border-[2px] border-green-900 rounded-xl'>
                                        <img className='h-[30px]' src={assets.whatsapp} alt=" whatsapp" />
                                        <p className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-lg'>WhatsApp</p>
                                    </button>
                                    <button className='items-center justify-center px-[12px] py-[8px] flex gap-[15px] border-[2px] border-primary rounded-xl'>
                                        <img className='h-[30px]' src={assets.ecosiumbot} alt=" whatsapp" />
                                        <p className='text-[16px] xs:text-[18px] sm:text-[20px] lg:text-lg'>Ecosium&nbsp;Bot</p>
                                    </button>
                                </div>
                            </div>
                            <div className='w-full xl:w-[30%] h-auto items-start justify-start flex flex-col gap-[5px] bg-gray-50 py-[15px] px-[25px] rounded-2xl flex-grow '>
                                <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-semibold'>
                                    Hotline
                                </p>
                                <p className='text-xl font-bold'>
                                    +971&nbsp;55&nbsp;398&nbsp;1911
                                </p>
                                <p className="text-[16px] text-gray-600">
                                    Mon - Sun 09:00 - 22:00
                                </p>
                            </div>
                            <div className='w- full xl:w-[30%] h-auto items-start justify-start flex flex-col gap-[10px] bg-gray-50 py-[15px] px-[25px] rounded-2xl flex-grow'>
                                <p className='text-[14px] xs:text-[14px] sm:text-[16px] lg:text-lg xxl:text-lg font-semibold'>
                                    We accept
                                </p>
                                <div className='w-full h-[30px] items-center justify-start flex gap-[40px]'>
                                    <img className='h-[16px] xl:h-[20px]' src={assets.visa} alt="" />
                                    <img className='h-[16px] xl:h-[20px]' src={assets.mastercard} alt="" />
                                    <img className='h-[16px] xl:h-[20px]' src={assets.applepay} alt="" />
                                    <img className='h-[16px] xl:h-[20px]' src={assets.paypal} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Sub Menu */}
                <hr className='w-full h-[2px] bg-primary text-primary' />
                <div className='w-full h-auto py-[25px] items-center justify-center flex'>
                    <div className="w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] gap-[20px]  h-auto items-stretch justify-between flex flex-wrap">
                        <div className="w-full md:w-[48%] xl:w-[190px] items-start justify-start flex flex-col gap-[5px">
                            <p className="text-lg font-semibold">
                                About&nbsp;us
                            </p>
                            <ul className='list-none text-[18px] pl-[5px]'>
                                <li>
                                    We are hiring
                                </li>
                                <li>
                                    Ecosium Guide
                                </li>
                                <li>
                                    Latest News
                                </li>
                                <li>
                                    Term & Condition
                                </li>
                                <li>
                                    Site map
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-[48%] xl:w-[190px] items-start justify-start flex flex-col gap-[5px">
                            <p className="text-lg font-semibold">
                                About&nbsp;us
                            </p>
                            <ul className='list-none text-[18px] pl-[5px]'>
                                <li>
                                    We are hiring
                                </li>
                                <li>
                                    Ecosium Guide
                                </li>
                                <li>
                                    Latest News
                                </li>
                                <li>
                                    Term & Condition
                                </li>
                                <li>
                                    Site map
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-[48%] xl:w-[190px] items-start justify-start flex flex-col gap-[5px">
                            <p className="text-lg font-semibold">
                                About&nbsp;us
                            </p>
                            <ul className='list-none text-[18px] pl-[5px]'>
                                <li>
                                    We are hiring
                                </li>
                                <li>
                                    Ecosium Guide
                                </li>
                                <li>
                                    Latest News
                                </li>
                                <li>
                                    Term & Condition
                                </li>
                                <li>
                                    Site map
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-[48%] xl:w-[190px] items-start justify-start flex flex-col gap-[5px">
                            <p className="text-lg font-semibold">
                                About&nbsp;us
                            </p>
                            <ul className='list-none text-[18px] pl-[5px]'>
                                <li>
                                    We are hiring
                                </li>
                                <li>
                                    Ecosium Guide
                                </li>
                                <li>
                                    Latest News
                                </li>
                                <li>
                                    Term & Condition
                                </li>
                                <li>
                                    Site map
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* App Download Section*/}
                <div className="w-full h-auto pb-[25px] items-center justify-center flex">
                    <div className="w-[95%] sm:w-[92%] md:w-[90%] xl:w-[87%] xxl:w-[85%] xxxl:w-[80%] max-w-[1600px] h-auto items-center justify-between flex flex-wrap gap-[20px]">
                        <div className="w-[45%] h-auto items-start justify-center flex flex-col gap-[10px]">
                            <p className='text-lg font-semibold'>
                                Dowlodes&nbsp;the&nbsp;app
                            </p>
                            <div className="w-full h-auto items-center justify-start flex gap-[30px]">
                                <img className='h-[50px]' src={assets.appstore} alt="App Store" />
                                <img className='h-[50px]' src={assets.playstore} alt="play Store" />
                            </div>
                        </div>
                        <div className="w-auto h-auto items-start justify-center flex flex-col gap-[10px]">
                            <p className='text-lg font-semibold'>
                                Follow us
                            </p>
                            <div className="w-full h-auto items-center justify-end flex gap-[15px]">
                                <div className="w-[45px] h-[45px] items-center justify-center flex bg-gray-200 rounded-full">
                                    <img className='h-[20px]' src={assets.facebook} alt="App Store" />
                                </div>
                                <div className="w-[45px] h-[45px] items-center justify-center flex bg-gray-200 rounded-full">
                                    <img className='h-[20px]' src={assets.instgram} alt="App Store" />
                                </div>
                                <div className="w-[45px] h-[45px] items-center justify-center flex bg-gray-200 rounded-full">
                                    <img className='h-[20px]' src={assets.x} alt="App Store" />
                                </div>
                                <div className="w-[45px] h-[45px] items-center justify-center flex bg-gray-200 rounded-full">
                                    <img className='h-[20px]' src={assets.tiktok} alt="App Store" />
                                </div>
                                <div className="w-[45px] h-[45px] items-center justify-center flex bg-gray-200 rounded-full">
                                    <img className='w-[20px] h-[20px]' src={assets.telegram} alt="App Store" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copywrites */}
                <div className='w-full h-auto items-center justify-center flex py-[10px] bg-primary'>
                    <p className='text-lg text-white font-medium '>Copywrites From Ecosium</p>
                </div>
            </div>
        </>
    )
}

export default Footer;