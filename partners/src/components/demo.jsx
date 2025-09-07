import React, { useRef, useState } from 'react'
import { assets } from '../assets/assets'

const UplodeDetails = () => {
    const textareaRef = useRef(null);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const [files, setFiles] = useState([
        { file: null, preview: null, type: null }, // Thumbnail
        { file: null, preview: null, type: null }, // First media
        { file: null, preview: null, type: null }, // Second media
    ]);

    // Auto resize textarea
    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    // Handle click for file inputs
    const handleDivClick = (index) => {
        if (index === 0) inputRef.current?.click();
        if (index === 1) inputRef1.current?.click();
        if (index === 2) inputRef2.current?.click();
    };

    // Handle file change
    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileType = file.type.startsWith('video') ? 'video' : 'image';
        const newFiles = [...files];

        newFiles[index] = {
            file,
            preview: URL.createObjectURL(file),
            type: fileType,
        };

        setFiles(newFiles);
    };

    // Remove file
    const handleRemoveFile = (index) => {
        const newFiles = [...files];
        newFiles[index] = { file: null, preview: null, type: null };
        setFiles(newFiles);
    };

    return (
        <>
            {/* Background */}
            <div className="w-full h-screen items-center justify-center flex overflow-hidden fixed z-0">
                <img className='w-full h-full ' src={assets.bisdocbg} alt="bg" />
            </div>

            {/* Form */}
            <div className='w-full h-auto min-h-screen items-center justify-center flex bg-[#ffffffd7] z-[2] absolute py-[150px]'>
                <div className='w-[80%] max-w-[1000px] h-auto items-center justify-center flex flex-col gap-[20px] p-10 border-[2px] border-gray-300 bg-[#ffffff]'>
                    <h1 className='text-4xl font-semibold tracking-[1px] text-primary text-center'>
                        Thank you for logging in,
                        <br />
                        [Partner Name]!
                    </h1>
                    <h2 className='text-xl font-medium '>
                        Let’s get your business profile set up.
                    </h2>

                    <form className=' w-[700px] h-auto items-center justify-center flex flex-col gap-[10px] py-[30px]'>

                        {/* Business Name */}
                        <p className='text-lg w-[90%]'>
                            Enter Your Business Name in Tradelicence:
                        </p>
                        <textarea
                            ref={textareaRef}
                            onInput={handleInput}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            placeholder='Enter Your Company Name.LLC'
                        />

                        {/* Contact Numbers */}
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter Your Business Contact Number:
                        </p>
                        <input
                            type="text"
                            placeholder="+971501234567"
                            maxLength={15}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                            onChange={(e) => {
                                let value = e.target.value;
                                if (value.startsWith('+')) {
                                    value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                                } else {
                                    value = value.replace(/[^0-9]/g, '');
                                }
                                e.target.value = value;
                            }}
                        />

                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter Alternative Contact Number:
                        </p>
                        <input
                            type="text"
                            placeholder="+971501234567"
                            maxLength={15}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                            onChange={(e) => {
                                let value = e.target.value;
                                if (value.startsWith('+')) {
                                    value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                                } else {
                                    value = value.replace(/[^0-9]/g, '');
                                }
                                e.target.value = value;
                            }}
                        />

                        {/* Address */}
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter Business Address:
                        </p>
                        <textarea
                            onInput={handleInput}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            placeholder='Business Address Line'
                        />
                        <div className='w-[90%] items-center justify-center flex gap-[20px]'>
                            <input
                                type="text"
                                placeholder="City"
                                className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                            />
                        </div>

                        {/* Google Map */}
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter your business Google Map Url:
                        </p>
                        <input
                            type="text"
                            placeholder="Google Map Url"
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                        />

                        {/* Upload Section */}
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Add your Profile & Media Images:
                        </p>

                        {/* Profile Image */}
                        <div className="w-[90%] h-auto flex flex-col gap-[5px]">
                            <div
                                onClick={() => handleDivClick(0)}
                                className="relative w-[calc(50%-10px)] aspect-[16/9] flex items-center justify-center cursor-pointer border-[2px]"
                            >
                                {files[0]?.preview ? (
                                    <>
                                        {files[0].type === "image" ? (
                                            <img src={files[0].preview} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <video src={files[0].preview} className="w-full h-full object-cover" controls />
                                        )}
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
                                            onClick={(e) => { e.stopPropagation(); handleRemoveFile(0); }}
                                        >
                                            ❌
                                        </button>
                                    </>
                                ) : (
                                    <img src={assets.uploade} alt="Upload" className="w-[200px]" />
                                )}
                                <input
                                    type="file"
                                    hidden
                                    ref={inputRef}
                                    accept="image/*,video/*"
                                    onChange={(e) => handleFileChange(e, 0)}
                                />
                            </div>
                            <p className='text-[14px] text-gray-500'>
                                (This is Your Profile Image)
                            </p>
                        </div>

                        {/* Other Media */}
                        <div className="w-[90%] flex gap-[15px]">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    onClick={() => handleDivClick(i)}
                                    className="relative w-[calc(50%-10px)] aspect-[16/9] flex items-center justify-center cursor-pointer border-[2px]"
                                >
                                    {files[i]?.preview ? (
                                        <>
                                            {files[i].type === "image" ? (
                                                <img src={files[i].preview} alt={`Media${i}`} className="w-full h-full object-cover" />
                                            ) : (
                                                <video src={files[i].preview} className="w-full h-full object-cover" controls />
                                            )}
                                            <button
                                                type="button"
                                                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
                                                onClick={(e) => { e.stopPropagation(); handleRemoveFile(i); }}
                                            >
                                                ❌
                                            </button>
                                        </>
                                    ) : (
                                        <img src={assets.uploade} alt="Upload" className="w-[200px]" />
                                    )}
                                    <input
                                        type="file"
                                        hidden
                                        ref={i === 1 ? inputRef1 : inputRef2}
                                        accept="image/*,video/*"
                                        onChange={(e) => handleFileChange(e, i)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Terms + Submit */}
                        <div className="w-[90%] flex flex-col mt-[30px] gap-[10px] items-start">
                            <div className='flex items-center gap-[10px]'>
                                <input type="checkbox" className='w-[20px] h-[20px]' />
                                <p className='text-[16px]'>Accept Terms and Conditions</p>
                            </div>
                            <button
                                className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UplodeDetails
