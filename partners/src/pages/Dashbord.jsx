import React, { useState } from 'react'
import WaitingScreen from '../components/WaitingScreen';
import Navbar from '../components/Navbar';
import WidgetScreen from './WidgetScreen';
import Header from '../components/Header';

const Dashbord = ({ setToken, status, name }) => {


    const [active, setActive] = useState("Add Event");
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
    console.log("Active is :" + active);
    return (
        <>
            {
                status === "submit" ?
                    <WaitingScreen setToken={setToken} name={name} /> : (
                        <>
                            <div
                                className='w-[100%] h-full items-center justify-between flex relative'
                            >
                                {
                                    // NavBar
                                    // NavBar
                                    // NavBar
                                }
                                <Navbar  setToken={setToken}/>

                                <div className="w-[calc(100%-300px)] h-screen items-center justify-center flex fixed top-0 right-0 overflow-y-scroll">

                                    <div className="w-full h-full items-start justify-center flex flex-col absolute top-0 z-[10]">
                                        {
                                            //Header
                                            //Header
                                        }
                                        <Header
                                            heading={"Event's"}
                                            buttonData={buttonData}
                                            setActive={setActive}
                                        />
                                        <WidgetScreen />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Dashbord