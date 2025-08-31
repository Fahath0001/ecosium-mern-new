import React, { useEffect, useState } from 'react'
import PartnersCard from '../patnersComponents/PartnersCard';

const NightLifeHome = ({ nightLifePatner }) => {
    const [acvtivePartner, setActivePartner] = useState([]);

    useEffect(() => {

        // filter event partners
        const filtered = nightLifePatner.filter(
            (p) => p.patnerStatus != "pending"
        );
        setActivePartner(filtered);

    }, [nightLifePatner]);
    return (
        <>
            {
                acvtivePartner.map((acvtivePartner, i) => (
                    <PartnersCard patnerData={acvtivePartner} key={i} />
                ))

            }
        </>
    )
}

export default NightLifeHome