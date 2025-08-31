import React from 'react'
import PartnersCard from '../patnersComponents/PartnersCard';
import { useState } from 'react';
import { useEffect } from 'react';

const EventHome = ({ eventPatner }) => {
    const [acvtivePartner, setActivePartner] = useState([]);
    const [waitingPartner, setWaitingPertner] = useState([]);

    useEffect(() => {
        if (!eventPatner) return;
        setActivePartner(eventPatner.filter((p) => p.patnerStatus === "active"));
        setWaitingPertner(eventPatner.filter((p) => p.patnerStatus === "submit"));
    }, [eventPatner]);


    return (
        <>
            <div
                className='w-[100%] items-start justify-center flex gap-5'
            >
                {
                    // Active Partners
                    // Active Partners
                    // Active Partners
                }
                <div
                    className='px-[8px] py-[8px] max-w-[416px] rounded-md bg-green-200 '
                >

                    {
                        acvtivePartner ? (
                            <div
                                className='items-center justify-center flex flex-col gap-[10px]'
                            >
                                <h1
                                    className='w-[100%] text-[20px] text-start font-bold ml-[20px]'
                                >
                                    Active Partners
                                </h1>
                                <div
                                    className='items-center justify-center flex flex-col gap-[5px]'
                                >
                                    {

                                        acvtivePartner.map((acvtivePartner, i) => (
                                            <PartnersCard patnerData={acvtivePartner} key={i} />
                                        ))
                                    }
                                </div>

                            </div>

                        ) : (
                            <div
                                className='w-[400px] '
                            >
                                <h1>
                                    No More Active Partners
                                </h1>
                            </div>
                        )


                    }
                </div>
                <div
                    className='px-[8px] py-[8px]  min-w-[408px] rounded-md bg-red-100 '
                >

                    {
                        waitingPartner ? (
                            <div
                                className='items-center justify-center flex flex-col gap-[10px]'
                            >
                                <h1
                                    className='w-[100%] text-[20px] text-start font-bold ml-[20px]'
                                >
                                    Waiting Partners
                                </h1>
                                <div
                                    className='items-center justify-center flex flex-col gap-[5px]'
                                >
                                    {

                                        waitingPartner.map((waitingPartner, i) => (
                                            <PartnersCard patnerData={waitingPartner} key={i} />
                                        ))
                                    }
                                </div>

                            </div>

                        ) : (
                            <div
                                className='min-w-[400px] items-center justify-center flex'
                            >
                                <h1>
                                    No More Active Partners
                                </h1>
                            </div>
                        )


                    }
                </div>
            </div>

        </>
    )
}

export default EventHome;