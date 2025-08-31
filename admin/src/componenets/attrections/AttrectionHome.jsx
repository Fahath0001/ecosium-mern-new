import React from 'react'
import PartnersCard from '../patnersComponents/PartnersCard';
import { useState } from 'react';
import { useEffect } from 'react';

const AttrectionHome = ({ attrectionPatners }) => {
    const [acvtivePartner, setActivePartner] = useState([]);

    useEffect(() => {

        // filter event partners
        const filtered = attrectionPatners.filter(
            (p) => p.patnerStatus != "pending"
        );
        setActivePartner(filtered);

    }, [attrectionPatners]);


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

export default AttrectionHome