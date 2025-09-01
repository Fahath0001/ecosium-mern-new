import React, { useEffect, useState } from 'react'
import PartnersCard from './PartnersCard';

const PatnersDashbordWidget = ({Patners}) => {
    const [acvtivePartner, setActivePartner] = useState([]);
    const [waitingPartner, setWaitingPertner] = useState([]);

    useEffect(() => {
        if (!Patners) return;
        setActivePartner(Patners.filter((p) => p.patnerStatus === "active"));
        setWaitingPertner(Patners.filter((p) => p.patnerStatus === "submit"));
    }, [Patners]);
    return (
        <>
            <div
                className='items-start justify-center flex flex-col gap-5'
            >
                {
                    // Active Partners
                    // Active Partners
                    // Active Partners
                }

                <div
                    className='px-[8px] py-[8px]  min-w-[408px] rounded-md bg-red-100 '
                >

                    {
                        waitingPartner.length > 0 ? (
                            <div
                                className='items-center justify-center flex flex-col gap-[10px]'
                            >
                                <h1
                                    className='w-[100%] text-[20px] text-start font-bold ml-[20px]'
                                >
                                    Waiting Partners
                                </h1>
                                <div
                                    className='items-center justify-center flex flex-col gap-[5px] max-h-[500px]'
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
                                className='min-w-[400px] items-center justify-center flex min-h-[150px]'
                            >
                                <h1>
                                    No More Available New Partners
                                </h1>
                            </div>
                        )


                    }
                </div>
                <div
                    className='px-[8px] py-[8px] max-w-[416px] rounded-md bg-green-200  max-h-[500px]'
                >

                    {
                        acvtivePartner.length > 0 ? (
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
                                <p
                                >
                                    View All
                                </p>

                            </div>

                        ) : (
                            <div
                                className='min-w-[400px] items-center justify-center flex min-h-[150px]'
                            >
                                <h1>
                                    No More Available New Partners
                                </h1>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default PatnersDashbordWidget