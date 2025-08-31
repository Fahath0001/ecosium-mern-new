import { useState } from 'react';
import Header from '../componenets/Header';
import { useEffect } from 'react';

import EventHome from '../componenets/event/EventHome.jsx';



const Events = ({ token, partners }) => {
    const [active, setActive] = useState("dash");
    const [eventPatner, setEventPatner] = useState([]);


    useEffect(() => {

        // filter event partners
        const filtered = partners.filter(
            (p) => p.businessType === "event"
        );
        setEventPatner(filtered);

    }, [partners]);



    const buttonData = [
        {
            name: "Add Event"
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
                    heading={"Event's"}
                    buttonData={buttonData}
                    setActive={setActive}
                />
                {
                    active === "dash" ? (
                        <EventHome eventPatner={eventPatner} />
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

export default Events