import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import DateRange from './DateRange';
import GuestInput from './GuestInput';
import DestinationInput from './DestinationInput';
import HotelFilters from './HotelFilters';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HotelsSidebar = () => {
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-5 bg-[#F8F8F8] w-[25%] shadow-md'>
            <div className='pl-[20%] pt-[2%] mt-4'>
                <div>
                    <ArrowBack onClick={() => navigate(-1)} style={{ cursor:'pointer' }}/>
                    <p className='text-2xl font-semibold'>Your Search</p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <DestinationInput />

                    <DateRange 
                        checkinDate={checkinDate} 
                        setCheckinDate={setCheckinDate} 
                        checkoutDate={checkoutDate} 
                        setCheckoutDate={setCheckoutDate}
                    />

                    <GuestInput />

                    <Button 
                        variant="contained"
                        sx={{
                            width:'90%',
                            borderRadius: '20px',
                            textTransform: 'capitalize',
                            backgroundColor: '#213547',
                            '&:hover': {
                              backgroundColor: '#1a2a3a',
                              color: '#fff'
                            }
                        }}
                    >Search</Button>
                </div>
            </div>

            <div className='flex flex-col bg-[#fff] pl-[20%] pt-[2%]'>
                <HotelFilters />
            </div>
        </div>
    )
}

export default HotelsSidebar;