import React, { useEffect, useState } from 'react'
import Header from '../componenets/Header';
import AttrectionHome from '../componenets/attrections/AttrectionHome';

const Attrection = ({ token, partners }) => {
    const [active, setActive] = useState("dash");
    const [attrectionPatners, setAttrectionPatners] = useState([]);


    useEffect(() => {

        // filter event partners
        const filtered = partners.filter(
            (p) => p.businessType === "attrection"
        );
        setAttrectionPatners(filtered);

    }, [partners]);

    const buttonData = [
        {
            name: "Add Attraction"
        },
        {
            name: "Add Category"
        },
    ];

    return (
        <>
            <div
                className="w-full items-center justify-start flex flex-col"
            >
                <Header
                    heading={"Attrections"}
                    buttonData={buttonData}
                    setActive={setActive}
                />
                {
                    active === "dash" ? (
                        <AttrectionHome attrectionPatners={attrectionPatners} />
                    ) : (
                        <h1>
                            Test
                        </h1>
                    )

                }

            </div>
        </>
    )
}

export default Attrection