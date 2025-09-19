import React from 'react'
import { assets } from '../assets/assets'

const TermAndContitions = ({ setTerm, setActive }) => {
    const Agree = () => {
        setActive(true)
        setTerm(false)
    }
    return (
        <>
            <div
                className='w-[100%]
                           h-[100vh]
                           z-50
                           bg-white
                           mb-10
                           items-center justify-start flex flex-col'
            >
                {
                    // Cover Iamge
                    // Cover Iamge
                }
                <div
                    className='w-full
                               h-[500px]
                               overflow-hidden
                               items-center justify-center flex'
                >
                    <img
                        className='w-full
                                   object-fit
                                   object-center'
                        src={assets.patnerBg}
                        alt="Cover Bg"
                    />

                </div>
                <div
                    className='w-[80%]
                               h-auto
                               mt-5
                               gap-4
                               items-start justify-start flex flex-col'
                >
                    {
                        // Main Heading
                        // Main Heading
                    }
                    <h1
                        className='text-4xl
                                   text-primary'
                    >
                        Terms and Conditions
                    </h1>
                    <p
                        className='text-base'
                    >
                        <strong>
                            {
                                "1. Acceptance of Terms" + "  "

                            }
                        </strong>
                        By accessing or using the services provided by ECOSIUM EVENTS MANAGING L.L.C
                        (hereinafter referred to as "the Provider"), you, the Partner, acknowledge that you have read, understood,
                        and agree to be bound by these Terms and Conditions. If you do not agree with these terms,
                        you must not use our services.
                    </p>
                    <p
                        className='text-base'
                    >
                        <strong>
                            {
                                "2. Scope of Services" + "  "
                            }
                        </strong>
                        The Provider shall provide the Partner with access to its digital platform/website for the purpose of listing,
                        marketing, and offering their services, including but not limited to, the provision of a professional business
                        profile, the facilitation and management of promotional campaigns, ticket and booking facilitation for events and attractions,
                        and the listing and display of a wide range of related services, including event venues.
                    </p>
                    <p
                        className='text-base
                                   text-start'
                    >
                        <strong>
                            {
                                "3. Partner Responsibilities " + "  "
                            }
                        </strong>
                    </p>
                    <div
                        className='w-[98%]
                                   ml-[2%]'
                    >
                        <p
                            className='text-base'
                        >
                            <strong>
                                {
                                    "3.1. Information and Documentation:" + "  "
                                }
                            </strong>
                            The Partner is responsible for providing accurate, complete, and up-to-date information for the onboarding process
                            and the website. This includes all content, business details, and necessary legal documents. The Partner warrants that
                            all documents provided are authentic, current, and in full compliance with UAE laws.
                        </p>
                    </div>
                    <div
                        className='w-[98%]
                                   ml-[2%]'
                    >
                        <p
                            className='text-base'
                        >
                            <strong>
                                {
                                    "3.2. Commercial Registration and Licensing:" + "  "
                                }
                            </strong>
                            The Partner warrants that it is a legally registered business entity in the United Arab Emirates and holds
                            all necessary commercial licenses, permits, and approvals from the relevant licensing authority, whether in
                            Dubai Mainland (DED) or a free zone, to conduct its business activities. The Partner agrees to provide copies
                            of these documents to the Provider upon request and to notify the Provider immediately of any changes to its
                            legal or licensed status. The Partner agrees to indemnify and hold the Provider harmless from any claims,
                            damages, or legal actions arising from the Partner's failure to comply with these legal and licensing requirements.
                        </p>
                    </div>
                    <div
                        className='w-[98%]
                                   ml-[2%]'
                    >
                        <p
                            className='text-base'
                        >
                            <strong>
                                {
                                    "3.3. Prohibited Conduct:" + "  "
                                }
                            </strong>
                            The Partner shall not use the services to engage in any unlawful, fraudulent, or harmful activities,
                            including but not limited to:
                        </p>
                    </div>
                    <div
                        className='w-[90%]
                                   ml-[10%]'
                    >
                        <ul
                            className='text-base
                                       list-disc'
                        >
                            <li>
                                Uploading or transmitting any illegal or offensive content.
                            </li>
                            <li>
                                Interfering with the proper functioning of the Provider's systems.
                            </li>
                            <li>
                                Violating the intellectual property rights of others.
                            </li>
                            <li>
                                Engaging in any activity that could be considered a cybercrime under UAE law.
                            </li>
                        </ul>
                    </div>
                    {
                        // Agree Button
                        // Agree Button
                    }
                    <div
                        className='gap-5
                                   my-4
                                   items-center justify-center flex'
                    >
                        <button type="button"
                            className='w-[250px] 
                                    py-[10px]
                                    text-[16px]
                                    font-semibold
                                  text-white
                                    tracking-[1px]
                                    rounded-xl
                                  bg-primary '
                            onClick={() => Agree()}
                        >
                            Agree
                        </button>
                        <button type="button" className="w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl"
                            onClick={() => setTerm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TermAndContitions