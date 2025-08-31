import React, { useEffect, useState } from 'react'
import NightLifeHome from '../componenets/night/NightLifeHome';
import Header from '../componenets/Header';

const NightLife = ({token, partners}) => {

    const [active, setActive] = useState("dash");
    const [nightLifePatner, setNightLifePatner] = useState([]);


    useEffect(() => {

        // filter event partners
        const filtered = partners.filter(
            (p) => p.businessType === "night"
        );
        setNightLifePatner(filtered);

    }, [partners]);

    const buttonData = [
        {
            name: "Add Night Life"
        },
        {
            name: "Add Category"
        },
        {
            name: "Add Artist"
        },
    ];


    return (
        <>
            <div className="w-full items-center justify-start flex flex-col">
                <Header
                    heading={"Night Life"}
                    buttonData={buttonData}
                    setActive={setActive}
                />
                {
                    active === "dash" ? (
                        <NightLifeHome nightLifePatner={nightLifePatner} />
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

export default NightLife;