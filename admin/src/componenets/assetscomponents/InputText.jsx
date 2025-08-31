import React from 'react'

const InputText = ({title, textValue, placeholder }) => {
 
    return (
        <>
            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                <p className='text-lg font-normal'>
                    {title}
                </p>
                <input
                    onChange={(e) => (textValue(e.target.value))}
     
                    type="text"
                    className='w-[400px] h-[35px] border-[1px] border-black pl-4'
                    placeholder= {placeholder} />
            </div>

        </>
    )
}

export default InputText