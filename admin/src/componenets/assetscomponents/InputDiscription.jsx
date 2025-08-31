import React, { Suspense, lazy, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const InputDiscription = ({ titleDis }) => {

    const [value, setValue] = useState('');
    console.log("Value is" + value);


    const handleChange = (content) => {
        setValue(content);
        textDiscription(content); // callback to parent
    };

    return (
        <div className='w-auto h-auto items-start justify-center flex flex-col'>
            <p className='text-lg font-normal'>
                {titleDis}
            </p>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                className='w-[500px]'
                placeholder={placeholderDis || 'Start typing here...'}
            />
        </div>
    );
};

export default InputDiscription;
