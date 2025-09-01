import React from 'react'
import PartnersCard from '../patnersComponents/PartnersCard';
import { useState } from 'react';
import { useEffect } from 'react';
import PatnersDashbordWidget from '../patnersComponents/PatnersDashbordWidget';
import SalesBarChart from '../SalesBarChart';

const AttrectionHome = ({ attrectionPatners }) => {



    return (
        <>
            <div
                className='w-[100%] h-[100%] items-start justify-start flex p-5'
            >
                <SalesBarChart />

                <PatnersDashbordWidget Patners={attrectionPatners} />
            </div>

        </>
    )
}

export default AttrectionHome