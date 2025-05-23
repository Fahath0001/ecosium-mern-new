import React, { useState } from 'react';
import { assets } from '../assets/assets';
import artistsData from '../assets/artists';

const ArtistCart = ({ artist }) => {
    const artistData = artistsData.find(element => element.id === artist);

    const [follow, setFollow] = useState(false);
    const [followers, setFollowers] = useState(artistData.followers);

    const handleToggle = () => {
        setFollowers(prev => follow ? prev - 1 : prev + 1);
        setFollow(!follow);
    };

    if (!artistData) return null; // handle case when artist is not found

    return (
        <div className="w-full h-auto items-center justify-between flex border-[2px] border-gray-300 rounded-lg overflow-hidden">
            <div className='w-[100px] aspect-square border-[1px] border-gray-200 rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={artistData.thumb} alt="Artist Thumb" />
            </div>
            <div className='w-[calc(100%-170px)] h-full items-start justify-center flex flex-col gap-[8px] pl-[10px]'>
                <h1 className='text-xl font-semibold'>{artistData.name}</h1>
                <h2 className='text-md text-primary font-medium'>
                    {followers} Followers
                </h2>
            </div>
            <div className='w-[70px] h-full items-center justify-start flex'>
                <button onClick={handleToggle}>
                    <img
                        className='w-[35px]'
                        src={follow ? assets.whislistred : assets.whislist}
                        alt="Follow Icon"
                    />
                </button>
            </div>
        </div>
    );
};

export default ArtistCart;
