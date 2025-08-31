import React from 'react'
import { NavLink } from 'react-router-dom';

const PartnersCard = (props) => {
    const partner = props.patnerData;
    const partnerId = partner.mid;
    const slug = partner.businessType;
    



    return (
        <>
            <NavLink
                to={`/${slug}/${partnerId}`}
            >

                <div
                    className='w-[400px] items-center justify-between flex border-black border-[1px] rounded-md p-1 bg-white'
                >
                    <div
                        className='items-center justify-center flex gap-[10px]'
                    >
                        <div
                            className='w-[70px] aspect-[1/1] border-[1px] border-black overflow-hidden'
                        >
                            <img
                                className='w-[100%] h-[100%] object-cover items-center justify-center flex'
                                src={
                                    partner.partnerDetails.mediaFile[0].mediaUrl
                                }
                                alt="" />

                        </div>
                        <div
                            className='w-[320px] h-[70px] items-start justify-center flex flex-col'
                        >
                            <h1
                                className='text-xl font-medium'
                            >
                                {
                                    partner.partnerDetails.businessName
                                }
                            </h1>
                            <p
                            >
                                {"Merchent Id : "}
                                <span
                                    className='text-primary font-bold'
                                >
                                    {
                                        partner.mid
                                    }
                                </span>

                            </p>
                        </div>

                    </div>


                </div>

            </NavLink>

        </>
    )
}

export default PartnersCard