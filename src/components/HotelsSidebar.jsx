import { ArrowBack, LocationOn } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import DateRange from './DateRange';
import GuestInput from './GuestInput';
import DestinationInput from './DestinationInput';

const HotelsSidebar = () => {
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');

    return (
        <div className='flex flex-col gap-5 bg-[#F8F8F8] w-[30%]'>
            <div>
                <ArrowBack />
                <p className='text-2xl font-semibold'>Your Search</p>
            </div>

            <div className='flex flex-col gap-4'>
                <DestinationInput />

                <DateRange 
                    checkinDate={checkinDate} 
                    setCheckinDate={setCheckinDate} 
                    checkoutDate={checkoutDate} 
                    setCheckoutDate={setCheckoutDate}
                />

                <GuestInput />
            </div>
        </div>
    )
}

export default HotelsSidebar;