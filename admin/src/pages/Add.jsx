import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import artistsData from '../assets/artists';
import Select from 'react-select';
import eventCategory from '../assets/eventCategory';
import axios from 'axios';
import { backendUrl } from '../App';


// 🔵 Your custom image icon (replace with your own image)
const customIcon = new L.Icon({
    iconUrl: '../vite.svg', // place image in public/ folder or import it
    iconSize: [40, 40],         // size of the icon
    iconAnchor: [20, 40],       // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40]       // point from which the popup should open relative to the iconAnchor
});

const DraggableMarker = ({ position, setPosition }) => {
    const markerRef = useRef(null);

    const eventHandlers = {
        dragend() {
            const marker = markerRef.current;
            if (marker != null) {
                setPosition(marker.getLatLng());
            }
        },
    };

    return (
        <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            icon={customIcon}
            ref={markerRef}
        >
            <Popup>
                Lat: {position.lat.toFixed(5)} <br />
                Lng: {position.lng.toFixed(5)}
            </Popup>
        </Marker>
    );
};


function Add({ token }) {

    const [position, setPosition] = useState({ lat: 25.276987, lng: 55.296249 }); // Default Dubai
    const [loading, setLoading] = useState(false);
    const [selectedArtists, setSelectedArtists] = useState([]); // Atrist's
    const maxMedia = 10;


    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [discription, setDiscription] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [files, setFiles] = useState([
        { file: null, preview: null, type: null }, // Thumbnail
        { file: null, preview: null, type: null }, // First media
    ]);
    console.log(loading);



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
    const handleSubmit = () => {
        // Check thumbnail
        if (!files[0]?.file) {
            alert("Please upload a thumbnail image.");
            return;
        }

        // Check at least one media file (files[1+])
        const hasMedia = files.slice(1).some(f => f.file !== null);
        if (!hasMedia) {
            alert("Please upload at least one media file (image or video).");
            return;
        }

        // If all good, proceed (for example, upload files or next step)
        alert("All files are uploaded! Ready to submit.");
    };


    const handleCancel = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };


    // Artist Section
    // Artist Section
    // Artist Section

    // Select Artist
    const handleArtistSelect = (e) => {
        const selectedId = e.target.value;
        const artist = artistsData.find((a) => a.id === selectedId);

        // Avoid duplicates
        if (artist && !selectedArtists.find((a) => a.id === artist.id)) {
            setSelectedArtists([...selectedArtists, artist]);
        }

        // Reset the select to default
        e.target.value = "";
    };

    // Remove Artist
    const handleArtistRemove = (id) => {
        setSelectedArtists(selectedArtists.filter((artist) => artist.id !== id));
    };

    // List Artist
    const options = artistsData.map(artist => ({
        value: artist.id,
        label: (
            <div className="flex items-center gap-[30px]">
                <img src={artist.thumb} alt="thumb" className="w-[60px] h-[60px] rounded-full" />
                <span>{artist.name}</span>
            </div>
        )
    }));


    // Category Section
    // Category Section
    // Category Section

    const toggleCategory = (item) => {
        const alreadySelected = selectedCategories.find(cat => cat.title === item.title);
        if (alreadySelected) {
            // Remove from array
            setSelectedCategories(prev => prev.filter(cat => cat.title !== item.title));
        } else {
            // Add to array
            setSelectedCategories(prev => [...prev, item]);
        }
    };





    const onSubmitEventHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true); // ✅ Start animation
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('category', JSON.stringify(selectedCategories));  // must be stringified JSON
            formData.append('discriptions', discription);

            files.forEach(item => {
                if (item.file) {
                    formData.append('mediaFiles', item.file); // ✅ Must match backend
                }
            });


            const response = await axios.post(backendUrl + "/api/event/add", formData, { headers: { token } });

        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false); // ✅ Stop animation
        }
    };

    return (
        <>
            {
                loading ? (
                    <div className='w-full h-screen items-center justify-center flex bg-geen fixed z-[100000]'>
                        <h1>
                            Wait
                        </h1>
                    </div >
                ) : (
                    < form onSubmit={onSubmitEventHandler} className='w-[calc(100%-350px)] flex flex-col items-start pl-[80px] pt-[50px] h-auto bg-white' >
                        <div className='w-auto flex flex-col justify-center items-start gap-[20px] mb-[20px]'>
                            <h1 className='text-2xl font-semibold'>Add Your Event</h1>
                            {
                                /* Event Name */
                                /* Event Name */
                                /* Event Name */
                            }
                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Event Name
                                </p>
                                <input onChange={(e) => (setName(e.target.value))} value={name} type="text" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                            </div>

                            {
                                /* Event price */
                                /* Event price */
                                /* Event price */
                            }
                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Event Price
                                </p>
                                <input onChange={(e) => (setPrice(e.target.value))} value={price} type="number" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                            </div>





                            {
                                /* Event Category */
                                /* Event Category */
                                /* Event Category */
                            }




                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Choose Your Event Category
                                </p>
                                <div className='w-full h-auto items-start justify-start flex flex-wrap gap-[10px]'>
                                    {eventCategory.map((item, i) => {
                                        const isSelected = selectedCategories.find(cat => cat.title === item.title);
                                        return (
                                            <div
                                                type='button'
                                                key={item.id}
                                                onClick={() => toggleCategory(item)}
                                                className={`items-center justify-between flex gap-[10px] rounded-lg border-[1px] py-[7px] px-[10px] cursor-pointer 
              ${isSelected ? 'bg-primary text-white border-primary' : 'border-gray-400 hover:bg-primary hover:text-white'}`}
                                            >
                                                <img
                                                    src={item.thumbnail}
                                                    className='w-[50px] h-[50px] rounded-sm'
                                                    alt="category Name"
                                                />
                                                <h1 className='text-nowrap font-medium'>{item.title}</h1>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className='w-auto h-auto items-start justify-center flex flex-col gap-[10px]'>
                                <p className='text-lg font-normal'>
                                    Event Date and Time
                                </p>
                                <div className='items-center justify-start flex gap-10'>
                                    <div className='items-center justify-start flex gap-3'>
                                        <label className='text-lg'>
                                            Date:
                                        </label>
                                        <input type="date" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                                    </div>
                                    <div className='items-center justify-start flex gap-3'>
                                        <label className='text-lg'>
                                            Starting Time:
                                        </label>
                                        <input type="time" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                                    </div>
                                    <div className='items-center justify-start flex gap-3'>
                                        <label className='text-lg'>
                                            End Time Time:
                                        </label>
                                        <input type="time" className='w-auto h-[35px] border-[1px] border-black pl-4' placeholder='Enter your Event Name' />
                                    </div>

                                </div>

                            </div>
                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Event Details
                                </p>
                                <textarea
                                    onChange={(e) => (setDiscription(e.target.value))}
                                    value={discription}
                                    className="w-[760px] h-[180px] border border-black pl-4"
                                    placeholder="Enter your Event Name"
                                />
                            </div>






                            {
                                /* Artist */
                                /* Artist */
                                /* Artist */
                            }

                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Artist's
                                </p>
                                <div className='w-[350px]'>
                                    <Select
                                        options={options}
                                        onChange={(selected) => handleArtistSelect({ target: { value: selected.value } })}
                                        placeholder="Select your Event Artist's"
                                    />

                                    <div style={{ marginTop: '20px' }}>
                                        {selectedArtists.map((artist) => (
                                            <div key={artist.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <span style={{ marginRight: '10px' }}>{artist.name}</span>
                                                <button onClick={() => handleArtistRemove(artist.id)}>Cancel</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>




                            {
                                /* Location */
                                /* Location */
                                /* Location */
                            }



                            <div className='w-auto h-auto items-start justify-center flex flex-col'>
                                <p className='text-lg font-normal'>
                                    Location
                                </p>
                                <input type="text" className='w-[400px] h-[35px] border-[1px] border-black pl-4' placeholder='Enter Evevn locan url' />
                            </div>

                            <div className='z-0'>
                                <MapContainer className='z-0' center={position} zoom={12} style={{ height: '400px', width: '800px' }}>
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <DraggableMarker position={position} setPosition={setPosition} />
                                </MapContainer>

                                <div style={{ marginTop: '10px' }}>
                                    <strong>Latitude:</strong> {position.lat.toFixed(5)} <br />
                                    <strong>Longitude:</strong> {position.lng.toFixed(5)}
                                </div>
                            </div>

                        </div>
                        {
                            /* Media Section */
                            /* Media Section */
                            /* Media Section */
                        }

                        {/* Test */}

                        <div className="space-y-10">
                            {/* Thumbnail */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Thumbnail Image <span className="text-red-500">*</span></h2>
                                <label htmlFor="thumbnail" className="cursor-pointer inline-block">
                                    {files[0]?.preview ? (
                                        <img
                                            src={files[0].preview}
                                            alt="Thumbnail"
                                            className="w-[300px] aspect-[16/9] object-cover border rounded"
                                        />
                                    ) : (
                                        <img
                                            src="../assets/images/upload_area.png"
                                            alt="Upload Thumbnail"
                                            className="w-[300px] aspect-[16/9] object-cover border rounded"
                                        />
                                    )}
                                    <input
                                        type="file"
                                        id="thumbnail"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, 0)}
                                    />
                                </label>
                            </div>

                            {/* Media */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Media Files <span className="text-red-500">*</span></h2>
                                <div className="flex flex-wrap gap-6">
                                    {files.slice(1).map((item, i) => {
                                        const index = i + 1;
                                        return (
                                            <div key={index} className="relative inline-block">
                                                <label htmlFor={`media-${index}`} className="cursor-pointer block">
                                                    {item.preview ? (
                                                        item.type === 'image' ? (
                                                            <img
                                                                src={item.preview}
                                                                alt={`Media ${index}`}
                                                                className="w-[300px] aspect-[16/9] object-cover border rounded"
                                                            />
                                                        ) : (
                                                            <video
                                                                src={item.preview}
                                                                controls
                                                                className="w-[300px] aspect-[16/9] object-cover border rounded"
                                                            />
                                                        )
                                                    ) : (
                                                        <img
                                                            src="../assets/images/upload_area.png"
                                                            alt="Upload Media"
                                                            className="w-[300px] aspect-[16/9] object-cover border rounded"
                                                        />
                                                    )}
                                                </label>
                                                <input
                                                    type="file"
                                                    id={`media-${index}`}
                                                    hidden
                                                    accept="image/*,video/*"
                                                    onChange={(e) => handleFileChange(e, index)}
                                                />

                                                {/* Cancel Button (for media > index 1 only) */}
                                                {index > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleCancel(index)}
                                                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                                        title="Remove"
                                                    >
                                                        &times;
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>


                        </div>


                        {/* Test */}




                        <div className='mt-[20px] mb-[100px]'>

                            <button
                                type="submit"
                                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>


                        </div>
                    </form >
                )
            }
        </>

    )
}

export default Add