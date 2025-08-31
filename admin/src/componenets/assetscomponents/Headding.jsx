import React from 'react'

const Headding = ({headding}) => {
    return (
        <>
            <div className="w-full h-auto items-start justify-start flex flex-col">
                <h1 className='text-2xl font-semibold'>
                    {headding}
                </h1>
            </div>
        </>
    )
}

export default Headding