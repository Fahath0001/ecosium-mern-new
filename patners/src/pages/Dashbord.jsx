import React from 'react'

const Dashbord = ({ setToken, setActive }) => {
    const handleSet = (() => {
        setToken("");
        setActive("")
    })
    return (
        <div>
            <h1>
                This is Dash Bord
            </h1>
            <button onClick={handleSet}>
                close
            </button>
        </div>
    )
}

export default Dashbord