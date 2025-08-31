import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { backendUrl } from '../../App';

const PartnersPage = ({ partners }) => {
    const navigate = useNavigate();
    const { mid, slug } = useParams();


    // Get Parner Data 
    // Get Parner Data 
    // Get Parner Data 
    const partneData = partners.find(p => p.mid === mid);
    const id = partneData._id
    // open windows
    const openMap = () => {
        window.open(partneData.partnerDetails.mapUrl, "_blank");
    };

    // Partner Status Updates
    // Partner Status Updates
    // Partner Status Updates
    const onSubmitStatusUpdates = async (e) => {
        e.preventDefault();
        try {
            const data = {
                id,
                status: "active"
            };

            const response = await axios.put(`${backendUrl}/api/partner/updatestatus`, data);
            console.log(response.data.patnerStatus)
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
        }
    };

    return (

        <div
            className='w-[100%] h-[100%] min-h-full items-start justify-center flex'
        >
            {
                partneData ? (
                    <div
                        className='w-[100%] h-[100%] items-center justify-start flex flex-col'
                    >
                        {
                            // Cover Iamges and profile pic
                            // Cover Iamges and profile pic
                        }
                        <div
                            className='w-full h-[400px] items-start justify-center flex relative'
                        >
                            {
                                // Back button
                                // Back button
                                // Back Button
                            }
                            <div
                                className='px-[10px] py-[5px] absolute top-5 left-5'
                            >
                                <button
                                    className="px-[25px] py-[8px] bg-primary text-white text-[16px] font-bold rounded-full"
                                    onClick={() => navigate(`/${slug}`)}
                                >
                                    Back
                                </button>
                            </div>
                            <div
                                className='w-full h-[400px] items-start justify-center flex overflow-hidden '
                            >

                                <img
                                    src={partneData.partnerDetails.mediaFile[0].mediaUrl}
                                    className='w-[100%] h-[100%] object-cover object-top'
                                    alt="Patner Cover Image"
                                />
                            </div>
                            <div
                                className='w-[250px] aspect-square overflow-hidden items-center justify-center flex absolute bottom-[-20px] left-[100px] rounded-lg border-primary border-[5px]'
                            >
                                <img
                                    src={partneData.partnerDetails.mediaFile[1].mediaUrl}
                                    className='w-[100%] h-[100%] object-cover object-top'
                                    alt=""
                                />
                            </div>
                        </div>
                        {
                            // Name
                            // Name
                        }
                        <div
                            className='w-[100%] items-start justify-start flex flex-col px-[120px] py-[50px]'
                        >
                            {
                                // Business Name
                                // Business Name
                            }
                            <h1
                                className='text-2xl font-bold'
                            >
                                {
                                    partneData.partnerDetails.businessName
                                }
                            </h1>
                            <p
                                className='text-md mt-2'
                            >
                                <span
                                    className='text-primary font-semibold'
                                >
                                    {"Mearchent Id : "}
                                </span>
                                {
                                    partneData.mid
                                }

                            </p>

                            {
                                // Contact Details
                                // Contact Details
                            }
                            <div
                                className='w-full items-center justify-between flex'
                            >
                                {
                                    // Business Phone numbers
                                    // Business Phone numbers
                                }
                                <div
                                    className='w-full items-start justify-start flex flex-col mt-[20px] gap-[3px]'
                                >
                                    <h1
                                        className='text-lg text-primary font-medium'
                                    >
                                        Telephone Numbers
                                    </h1>

                                    <div
                                        className='flex'
                                    >
                                        {
                                            partneData.partnerDetails.bisPhone[0] + ",  " + partneData.partnerDetails.bisPhone[1]
                                        }
                                    </div>
                                </div>

                                {
                                    // Business Emails
                                    // Business Emails
                                }
                                <div
                                    className='w-full items-start justify-start flex flex-col mt-[20px] gap-[3px]'
                                >
                                    <h1
                                        className='text-lg text-primary font-medium'
                                    >
                                        Emails
                                    </h1>

                                    <div
                                        className='flex'
                                    >
                                        {
                                            partneData.email
                                        }
                                    </div>
                                </div>
                            </div>


                            <div
                                className='w-full items-center justify-between flex'
                            >
                                {
                                    // Business Location
                                    // Business Location
                                }
                                <div
                                    className='w-full items-start justify-start flex flex-col mt-[20px] gap-[3px]'
                                >
                                    <h1
                                        className='text-lg text-primary font-medium'
                                    >
                                        Location
                                    </h1>
                                    <p>
                                        {
                                            partneData.partnerDetails.bisAddress.addressLine
                                        }
                                    </p>
                                    <div
                                        className='flex'
                                    >
                                        {
                                            partneData.partnerDetails.bisAddress.city + ",  " + partneData.partnerDetails.bisAddress.country
                                        }
                                    </div>
                                    <button
                                        onClick={openMap}
                                        className=" px-4 py-2 bg-primary text-white rounded-lg text-nowrap mt-2"
                                    >
                                        View Location
                                    </button>
                                </div>

                                {
                                    // Partner Status
                                    // Partner Status
                                }
                                <div
                                    className='w-full items-start justify-start flex flex-col mt-[20px] gap-[3px]'
                                >
                                    <h1
                                        className='text-lg text-primary font-medium'
                                    >
                                        Partner Status
                                    </h1>
                                    {
                                        partneData.patnerStatus === "active" ? (
                                            <p
                                                className='text-green-600 font-bold'
                                            >
                                                Active
                                            </p>

                                        ) : (
                                            <div
                                                className='flex flex-col '
                                            >
                                                <p
                                                    className='text-red-600 font-bold'
                                                >
                                                    Waiting For the Approval
                                                </p>
                                                <button
                                                    onClick={onSubmitStatusUpdates}
                                                    className=" px-2 py-2 bg-primary text-white rounded-lg text-nowrap mt-2"
                                                >
                                                    Active
                                                </button>
                                            </div>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>
                        Partner isn't Available
                    </h1>
                )
            }


        </div>
    )
}

export default PartnersPage