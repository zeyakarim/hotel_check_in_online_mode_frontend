import { IconButton, Tooltip } from '@mui/material';
import hotelImage from '/hotel.png';
import { Fragment } from 'react';
import { ArrowForward } from '@mui/icons-material';

const Header = () => {
    return (
        <Fragment>
            <div 
                className="w-[90%] mx-auto mt-10 rounded-xl relative"
                style={{boxShadow:'0px 0px 6px 2px #0000001a'}}
            >
                <div 
                    className='flex flex-col gap-4 items-center justify-center min-h-[300px] bg-cover bg-center text-white'
                    style={{ 
                        backgroundImage: `url(${hotelImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '12px'
                    }}
                >
                    <h4 className='text-4xl font-semibold'>Book your stay with Tripster</h4>
                    <p className='text-xl'>1,000 rooms around the world waiting for you!</p>
                </div>

                <div className='flex items-center justify-center gap-6 absolute -bottom-10 left-[15%] w-[70%] bg-white shadow-md py-3 pl-10 pr-3 rounded-full'>
                    <div className='flex flex-col gap-2 w-[22%] border-r'>
                        <p className='text-sm font-semibold'>Location</p>
                        <p className='text-[#858585] text-sm'>Where are you going?</p>
                    </div>
                    <div className='flex flex-col gap-2 w-[22%] border-r'>
                        <p className='text-sm font-semibold'>Check-in</p>
                        <p className='text-[#858585] text-sm'>Add date</p>
                    </div>
                    <div className='flex flex-col gap-2 w-[22%] border-r'>
                        <p className='text-sm font-semibold'>Check-out</p>
                        <p className='text-[#858585] text-sm'>Add date</p>
                    </div>
                    <div className='flex flex-col gap-2 w-[22%]'>
                        <p className='text-sm font-semibold'>Guests</p>
                        <p className='text-[#858585] text-sm'>Number of guests</p>
                    </div>
                    <div>
                        <Tooltip title='Search' sx={{ backgroundColor:'#213547', color:'#fff', '&:hover': { backgroundColor:'#213547' }}}>
                            <IconButton>
                                <ArrowForward />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;