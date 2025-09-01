import React from 'react'
import PatnersDashbordWidget from '../patnersComponents/PatnersDashbordWidget';

const EventHome = ({ eventPatner }) => {



    return (
        <>
            <PatnersDashbordWidget Patners={eventPatner} />

        </>
    )
}

export default EventHome;