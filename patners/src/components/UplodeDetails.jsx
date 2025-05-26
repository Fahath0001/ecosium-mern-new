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
        { file: null, preview: null, type: null }, // 2nd media
    ]);

    console.log(files);


    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    };

    // Images Uploades
    // Images Uploades
    const handleDivClick = () => {
        inputRef.current?.click(); // Trigger file input click
    };

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

        // Auto add next box if needed
        if (index === files.length - 1 && files.length < maxMedia) {
            newFiles.push({ file: null, preview: null, type: null });
        }

        setFiles(newFiles);
    };

    return (
        <>
            {
                /* Patner Dashbord Bg */
                /* Patner Dashbord Bg */
                /* Patner Dashbord Bg */
            }
            <div className="w-full h-screen items-center justify-center flex overflow-hidden fixed z-0">
                <img className='w-full h-full ' src={assets.bisdocbg} alt="bg" />
            </div>
            {
                /* Patner Documentations */
                /* Patner Documentations */
                /* Patner Documentations */
            }
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
                        <p className='text-lg w-[90%]'>
                            Enter Your Business Name in Tradelicence:
                        </p>
                        <textarea
                            ref={textareaRef}
                            onInput={handleInput}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            type="text"
                            placeholder='Enter Your Companty Name.LLC'
                        />
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter Your Business Contact Number:
                        </p>
                        <input
                            type="text"
                            placeholder="+971501234567"
                            maxLength={15}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            onChange={(e) => {
                                let value = e.target.value;

                                // Remove all non-digit characters, but allow one "+" at the beginning
                                if (value.startsWith('+')) {
                                    value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                                } else {
                                    value = value.replace(/[^0-9]/g, '');
                                }

                                e.target.value = value;
                            }}
                        />
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter altinative Contact Number:
                        </p>
                        <input
                            type="text"
                            placeholder="+971501234567"
                            maxLength={15}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            onChange={(e) => {
                                let value = e.target.value;

                                // Remove all non-digit characters, but allow one "+" at the beginning
                                if (value.startsWith('+')) {
                                    value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                                } else {
                                    value = value.replace(/[^0-9]/g, '');
                                }

                                e.target.value = value;
                            }}
                        />
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter Bussiness Adress:
                        </p>
                        <textarea
                            ref={textareaRef}
                            onInput={handleInput}
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            type="text"
                            placeholder='Businss Address Line'
                        />
                        <div className='w-[90%] items-center justify-center flex gap-[20px]'>
                            <input
                                type="text"
                                placeholder="City"
                                className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                            />
                        </div>
                        <p className='text-lg w-[90%] mt-[10px]'>
                            Enter your business google Map Url:
                        </p>
                        <input
                            type="text"
                            placeholder="Google Map Url"
                            className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none overflow-hidden outline-none"
                        />

                        <p className='text-lg w-[90%] mt-[10px]'>
                            Add your Profile Images:
                        </p>
                        <div className="w-[90%] h-auto items-start justify-start flex flex-col gap-[5px]">
                            <div
                                onClick={handleDivClick}
                                className="w-[calc(50%-10px)] aspect-[16/9] items-center justify-center cursor-pointer flex  border-[2px] "
                            >
                                {files[0]?.preview ? (
                                    <img
                                        src={files[0].preview}
                                        alt="Thumbnail"
                                        className="w-[300px] aspect-[16/9] object-cover"
                                    />
                                ) : (
                                    <img
                                        src={assets.uploade}
                                        alt="Upload Thumbnail"
                                        className="w-[200px] aspect-[16/9] "
                                    />
                                )}
                                <input
                                    type="file"
                                    id="thumbnail"
                                    hidden
                                    ref={inputRef}
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 0)}
                                />
                            </div>
                            <p className='text-[14px] text-gray-500'>
                                (This is Your Profile Image)
                            </p>
                        </div>

                        <div className="w-[90%] h-auto items-start justify-start flex gap-[15px]">
                            <div
                                onClick={handleDivClick}
                                className="w-[calc(50%-10px)] aspect-[16/9] items-center justify-center cursor-pointer flex  border-[2px] "
                            >
                                {files[1]?.preview ? (
                                    <img
                                        src={files[1].preview}
                                        alt="Thumbnail"
                                        className="w-[300px] aspect-[16/9] object-cover"
                                    />
                                ) : (
                                    <img
                                        src={assets.uploade}
                                        alt="Upload Thumbnail"
                                        className="w-[200px] aspect-[16/9] "
                                    />
                                )}
                                <input
                                    type="file"
                                    id="thumbnail"
                                    hidden
                                    ref={inputRef}
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 0)}
                                />
                            </div>
                            <div
                                onClick={handleDivClick}
                                className="w-[calc(50%-10px)]  aspect-[16/9] items-center justify-center cursor-pointer flex  border-[2px] "
                            >
                                {files[2]?.preview ? (
                                    <img
                                        src={files[2].preview}
                                        alt="Thumbnail"
                                        className="w-[300px] aspect-[16/9] object-cover"
                                    />
                                ) : (
                                    <img
                                        src={assets.uploade}
                                        alt="Upload Thumbnail"
                                        className="w-[200px] aspect-[16/9] "
                                    />
                                )}
                                <input
                                    type="file"
                                    id="thumbnail"
                                    hidden
                                    ref={inputRef}
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 0)}
                                />
                            </div>
                        </div>
                        <div className="w-[90%] h-auto items-center justify-center flex flex-col mt-[30px] gap-[10px]">
                            <div className='w-full items-center justify-start flex gap-[10px]'>
                                <input
                                    type="checkbox"
                                    className='w-[20px] h-[20px]'
                                />
                                <p className='text-[16px]'>
                                    Accept Terms and Conditions
                                </p>
                            </div>
                            <button
                                className='w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl '
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