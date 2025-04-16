import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const LatestUpdate = () => {
    return (
        <div className='flex justify-between bg-white w-[90%] mx-auto rounded-2xl py-5 px-6' style={{boxShadow:'0px 0px 6px 2px #0000001a'}}>
            <div className='flex gap-4 items-center'>
                <VolunteerActivismIcon />
                <div>
                    <p className='text-sm'>Do you want to get secret offers and best prices for amazing stays?</p>
                    <p className='text-sm'>Sign up to join our Travel Club!</p>
                </div>
            </div>
            <Button 
                variant="outlined"
                component={Link}
                to="/signup"
                sx={{
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                    borderColor: '#213547',
                    color: '#213547',
                    '&:hover': {
                        borderColor: '#1a2a3a',
                        color: '#1a2a3a'
                    }
                }}
            >
                Sign Up
            </Button>
        </div>
    )
}

export default LatestUpdate;