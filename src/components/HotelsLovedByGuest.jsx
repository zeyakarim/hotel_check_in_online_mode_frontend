import React from 'react';
import { ChevronRight } from '@mui/icons-material';

const hotelsLovedByGuest = [
    { 
        country: 'Spain',
        hotelName: 'Soho Hotel London',
        price: 130,
        image: '/spain.png'
    },
    { 
        country: 'London',
        hotelName: 'Hotel Norrebro',
        price: 180,
        image: '/london.png'
    },
    { 
        country: 'Lisbon',
        hotelName: 'Sunset Plaza Hotel',
        price: 210,
        image: '/lisbon.jpg'
    },
    { 
        country: 'Croatia',
        hotelName: 'Three Quaters Hotel',
        price: 130,
        image: '/croatia.jpg'
    },
    { 
        country: 'Bratislava',
        hotelName: `Surf'n Turf Suites`,
        price: 70, 
        image: '/bratislava.jpg'
    }
];

const HotelsLovedByGuest = () => {

    return (
        <div className='w-[90%] mx-auto'>
            <h4 className='text-2xl font-semibold mb-8'>Hotels Loved By Guest</h4>
            <div className='flex gap-6'>
                {hotelsLovedByGuest?.map((hotel, index) => (
                    <div
                        key={index}
                        className='rounded-xl w-[21rem] p-2 flex flex-col gap-3'
                        style={{boxShadow:'0px 0px 6px 2px #0000001a'}}
                    >
                        <img 
                            src={hotel.image}
                            alt={hotel.country}
                            className={'w-full rounded-xl object-cover h-[200px]'}
                        />
                        <div className='flex flex-col gap-[2px]'>
                            <p className='font-semibold'>{hotel?.hotelName}</p>
                            <p className='text-[#858585]'>{hotel?.country}</p>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>from ${hotel?.price}/night</p>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsLovedByGuest;