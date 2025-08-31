import { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import Notification from './Notification';

const UplodeDetails = ({ setToken, id }) => {
  const [businessName, setBusinessName] = useState('');
  const [contact, setContact] = useState(['', '']); // initialize 2 contacts
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [active, setActive] = useState(false);
  const [files, setFiles] = useState([
    { file: null, preview: null, type: null }, // thumbnail
    { file: null, preview: null, type: null }, // media 1
  ]);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const textareaRef = useRef(null);
  const maxMedia = 2;

  const handleInput = (ref) => {
    if (!ref) return;
    ref.style.height = "auto";
    ref.style.height = `${ref.scrollHeight}px`;
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.startsWith('video') ? 'video' : 'image';
    const newFiles = [...files];

    newFiles[index] = { file, preview: URL.createObjectURL(file), type: fileType };

    if (index === files.length - 1 && files.length < maxMedia) {
      newFiles.push({ file: null, preview: null, type: null });
    }

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
      setNotification({ show: true, message: 'Updating, please wait...', type: 'info' });

      const res = await axios.put(`${backendUrl}/api/partner/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setNotification({ show: true, message: res.data.message || 'Update successful', type: 'success' });
      console.log('Update success:', res.data);
    } catch (err) {
      console.error('Update failed:', err.response?.data || err.message);
      setNotification({ show: true, message: err.response?.data?.message || 'Update failed', type: 'error' });
    }
  };

  return (
    <>
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}

      {/* Background */}
      <div className="w-full h-screen flex items-center justify-center fixed z-0">
        <img className='w-full h-full' src={assets.patnerBg} alt="bg" />
      </div>

      {/* Form */}
      <div className='w-full min-h-screen flex items-center justify-center bg-[#ffffffd7] z-[2] absolute py-[150px]'>
        <div className='w-[80%] max-w-[1000px] flex flex-col gap-[20px] p-10 border-[2px] border-gray-300 bg-[#ffffff]'>
          <img className='w-[200px]' src={assets.logo} alt="Ecosium Logo" />
          <h1 className='text-4xl font-semibold tracking-[1px] text-primary text-center mt-[20px]'>Thank you for logging in,</h1>
          <h2 className='text-xl font-medium'>Let’s get your business profile set up.</h2>

          <form onSubmit={handleSubmit} className='w-[700px] flex flex-col gap-[10px] py-[30px]'>

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

            {/* Checkbox & Submit */}
            <div className="w-[90%] flex flex-col mt-[30px] gap-[10px]">
              <div className='flex items-center gap-[10px]'>
                <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} className="w-[20px] h-[20px]" />
                <p className='text-[16px]'>Accept Terms and Conditions</p>
              </div>

              <div className="flex gap-[20px] mt-5">
                <button type="submit" disabled={!active} className={`w-[250px] py-[10px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl ${active ? 'bg-primary' : 'bg-gray-400'}`}>
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
  );
};

export default UplodeDetails;
