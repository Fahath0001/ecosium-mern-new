import { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import TermAndContitions from '../pages/TermAndContitions';
import { Route, Routes } from 'react-router-dom';

const UplodeDetails = ({ setToken, id }) => {
  const [businessName, setBusinessName] = useState('');
  const [contact, setContact] = useState(['', '']); // initialize 2 contacts
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [active, setActive] = useState(false);
  const [term, setTerm] = useState(false);



  const textareaRef = useRef(null);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const [files, setFiles] = useState([
    { file: null, preview: null, type: null }, // Thumbnail
    { file: null, preview: null, type: null }, // First media
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach(item => item.file && formData.append('mediaFiles', item.file));

    const partnerDetails = {
      businessName,
      bisPhone: contact,
      bisAddress: { addressLine, city, country },
      mapUrl,
    };

    formData.append('patnerStatus', 'submit');
    formData.append('partnerDetails', JSON.stringify(partnerDetails));

    try {

      const res = await axios.put(`${backendUrl}/api/partner/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Update success:', res.data);
    } catch (err) {
      console.error('Update failed:', err.response?.data || err.message);
    }
  };

  return (
    <>
      {
        term ? (
          <TermAndContitions setActive={setActive} setTerm={setTerm} />
        ) : (
          <>
            {/* Background */}
            <div className="w-full h-screen flex items-center justify-center fixed z-0">
              <img className='w-full h-full' src={assets.patnerBg} alt="bg" />
            </div>

            {/* Form */}
            <div className='w-full min-h-screen flex items-center justify-center bg-[#ffffffd7] z-[2] absolute py-[150px]'>
              <div className='w-[80%] max-w-[1000px] items-center justify-center flex flex-col gap-[20px] p-10 border-[2px] border-gray-300 bg-[#ffffff]'>
                <div
                  className='w-full items-center justify-center flex flex-col gap-3'
                >

                  <img className='w-[200px]' src={assets.logo} alt="Ecosium Logo" />

                  <h1 className='text-4xl font-semibold tracking-[1px] text-primary text-center mt-[20px]'>Thank you for logging in,</h1>
                  <h2 className='text-xl font-medium'>Let’s get your business profile set up.</h2>
                </div>

                <form onSubmit={handleSubmit} className='w-[80%] max-w-[1000px]  flex flex-col gap-[10px] py-[30px]'>

                  {/* Business Name */}
                  <p className='text-lg w-[90%]'>Enter Your Business Name in Tradelicence:</p>
                  <textarea
                    ref={textareaRef}
                    onInput={(e) => handleInput(e.target)}
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder='Enter Your Company Name.LLC'
                    className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none outline-none"
                  />

                  {/* Contact Numbers */}
                  <p className='text-lg w-[90%] mt-[10px]'>Enter Your Business Contact Number:</p>
                  <input
                    type="text"
                    value={contact[0]}
                    placeholder="+971501234567"
                    maxLength={15}
                    onChange={(e) => {
                      let value = e.target.value.startsWith('+') ? '+' + e.target.value.slice(1).replace(/[^0-9]/g, '') : e.target.value.replace(/[^0-9]/g, '');
                      setContact([value, contact[1]]);
                    }}
                    className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                  />

                  <p className='text-lg w-[90%] mt-[10px]'>Enter Alternative Contact Number:</p>
                  <input
                    type="text"
                    value={contact[1]}
                    placeholder="+971501234567"
                    maxLength={15}
                    onChange={(e) => {
                      let value = e.target.value.startsWith('+') ? '+' + e.target.value.slice(1).replace(/[^0-9]/g, '') : e.target.value.replace(/[^0-9]/g, '');
                      setContact([contact[0], value]);
                    }}
                    className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none"
                  />

                  {/* Address */}
                  <p className='text-lg w-[90%] mt-[10px]'>Enter Business Address:</p>
                  <textarea
                    ref={textareaRef}
                    onInput={(e) => handleInput(e.target)}
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    placeholder='Business Address Line'
                    className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded resize-none outline-none"
                  />

                  <div className='w-[90%] flex gap-[20px]'>
                    <input type="text" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none" />
                    <input type="text" value={country} placeholder="Country" onChange={(e) => setCountry(e.target.value)} className="w-[50%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none" />
                  </div>

                  <p className='text-lg w-[90%] mt-[10px]'>Enter your business Google Map URL:</p>
                  <input type="text" value={mapUrl} placeholder="Google Map URL" onChange={(e) => setMapUrl(e.target.value)} className="w-[90%] border border-gray-300 text-[18px] py-2 px-3 rounded outline-none" />

                  {/* Upload Section */}
                  <p className='text-lg w-[90%] mt-[10px]'>
                    Add your Company Logo:
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
                        <div
                          className='items-center justify-center flex'
                        >
                          <img src={assets.uploade} alt="Upload" className="w-[70px]" />
                        </div>
                      )}
                      <input
                        type="file"
                        hidden
                        ref={inputRef}
                        accept="image/*,video/*"
                        onChange={(e) => handleFileChange(e, 0)}
                      />
                    </div>
                    <p className='text-lg w-[90%] mt-[10px]'>
                      Cover Image:
                      <br />
                      <span
                        className='text-sm
                                   text-gray'
                      >
                        {
                          "(Proof of the Business Iamge)" 
                        }

                      </span>
                    </p>
                  </div>
                  {/* Other Media */}
                  <div className="w-[100%] flex gap-[15px]">
                    {[1].map((i) => (
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
                          <div
                            className='items-center justify-center flex'
                          >
                            <img src={assets.uploade} alt="Upload" className="w-[80px]" />
                          </div>
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



                  {/* Checkbox & Submit */}
                  <div className="w-[90%] flex flex-col mt-[30px] gap-[10px]">
                    <div className='flex items-center gap-[10px]'>
                      <input type="checkbox" checked={term} onChange={(e) => setTerm(e.target.checked)} className="w-[20px] h-[20px]" />
                      <p className='text-[16px]'>Accept Terms and Conditions</p>
                    </div>

                    <div className="flex gap-[20px] mt-5">
                      <button type="submit"
                        onClick={handleSubmit}
                        disabled={!active}
                        className={`w-[250px] py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl ${active ? 'bg-primary' : 'bg-gray-400'}`}>
                        Submit
                      </button>
                      <button type="button" className="w-[250px] bg-primary py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl" onClick={() => setToken('')}>
                        Sign Out
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default UplodeDetails;
