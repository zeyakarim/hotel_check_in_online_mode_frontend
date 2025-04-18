import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '@mui/material';

const hotels = [
    {
        image: '/hotel-norrebro.jpg',
        name: 'Hotel Norrebro',
        location: '0.4 km from city center',
        provides: ['Free Cancellation', 'Breakfast Included'],
        roomType: 'Comfort Room',
        bed: '1x king size bed',
        bathroom: '1x bathroom',
        tags: ['#Hot deal', '#Popular'],
        reveiws: '1,920 reviews',
        ratingType: 'Excellent',
        rating: '9.6',
        price: '$180'
    },
    {
        image: '/hotel-norrebro.jpg',
        name: 'Hotel Norrebro',
        location: '0.4 km from city center',
        provides: ['Free Cancellation', 'Breakfast Included'],
        roomType: 'Comfort Room',
        bed: '1x king size bed',
        bathroom: '1x bathroom',
        tags: ['#Hot deal', '#Popular'],
        reveiws: '1,920 reviews',
        ratingType: 'Excellent',
        rating: '9.6',
        price: '$180'
    },
    {
        image: '/hotel-norrebro.jpg',
        name: 'Hotel Norrebro',
        location: '0.4 km from city center',
        provides: ['Free Cancellation', 'Breakfast Included'],
        roomType: 'Comfort Room',
        bed: '1x king size bed',
        bathroom: '1x bathroom',
        tags: ['#Hot deal', '#Popular'],
        reveiws: '1,920 reviews',
        ratingType: 'Excellent',
        rating: '9.6',
        price: '$180'
    },
    {
        image: '/hotel-norrebro.jpg',
        name: 'Hotel Norrebro',
        location: '0.4 km from city center',
        provides: ['Free Cancellation', 'Breakfast Included'],
        roomType: 'Comfort Room',
        bed: '1x king size bed',
        bathroom: '1x bathroom',
        tags: ['#Hot deal', '#Popular'],
        reveiws: '1,920 reviews',
        ratingType: 'Excellent',
        rating: '9.6',
        price: '$180'
    }
]

const HotelsComponent = () => {
    const [sort, setSort] = useState('');

    return (
        <div className='w-[72%] p-10'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <p>20 filtered results for Copenhagen, 9-12 Dec, 2 guests, 1 room</p>
                    <p className='text-2xl font-semibold'>Breakfast included</p>
                </div>

                <FormControl sx={{ width: 250 }}>
                    <InputLabel id="sortby" sx={{ top: sort ? '0px': '-6px'}}>Sort By</InputLabel>
                    <Select
                        labelId="sortby"
                        id="demo-simple-select"
                        value={sort}
                        label="Sort"
                        onChange={(event) => setSort(event?.target?.value)}
                        size='small'
                        sx={{ borderRadius:'20px' }}
                    >
                        <MenuItem value='price high to low'>Price (High To Low)</MenuItem>
                        <MenuItem value='price low to high'>Price (Low To High)</MenuItem>
                        <MenuItem value='property rating high to low'>Property Rating (High To Low)</MenuItem>
                        <MenuItem value='property rating low to high'>Property Rating (Low To High)</MenuItem>
                        <MenuItem value=''>NA</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='flex flex-col gap-6 mt-8'>
                {hotels?.map((hotel) => (
                    <div key={hotel?.name} className='flex gap-4 justify-between rounded-[20px] p-4' style={{boxShadow:'0px 0px 6px 2px #0000001a'}}>
                        <div className='flex gap-4' >
                            <img 
                                src={hotel?.image} 
                                alt={hotel?.name}
                                style={{ width:'200px', height:'200px', borderRadius:'20px' }}
                            />
                            <div className='flex flex-col justify-between gap-1'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-xl font-semibold'>{hotel?.name}</p>
                                    <p className='text-[#858585] text-sm'>{hotel?.location}</p>
                                    <div className='flex gap-2'>
                                        {hotel?.provides?.map((provide, index) => (
                                            <p className='text-[#858585] text-sm'>{provide} {hotel?.provides?.length - 1 !== index && '.'}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <p className='text-sm font-semibold'>{hotel?.roomType}</p>
                                    <p className='text-sm'>{hotel?.bed}</p>
                                    <p className='text-sm'>{hotel?.bathroom}</p>
                                    <div className='flex gap-2'>
                                        {hotel?.tags?.map((tag) => (
                                            <p className='text-sm rounded-full border-[#213547] py-1 px-3 border'>{tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <div className='flex justify-between gap-2 items-center'>
                                <div>
                                    <p className='text-green-500 font-semibold'>{hotel?.ratingType}</p>
                                    <p className='text-[#858585] text-sm'>{hotel?.reveiws}</p>
                                </div>
                                <p className='bg-[#E1FFD7] text-[#009D52] py-1 px-4 text-sm rounded-full font-semibold'>{hotel?.rating}</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-lg font-semibold text-end'>{hotel?.price}</p>
                                <Button 
                                    variant="contained"
                                    sx={{
                                        borderRadius: '20px',
                                        textTransform: 'capitalize',
                                        backgroundColor: '#213547',
                                        '&:hover': {
                                            backgroundColor: '#1a2a3a',
                                            color: '#fff'
                                        },
                                        fontSize:'13x'
                                    }}
                                >
                                    See Booking Options
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotelsComponent;