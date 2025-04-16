import { Button, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import hotelImage from '/hotel.png';
import { Fragment } from 'react';
import { ArrowForward } from '@mui/icons-material';

const Header = () => {
    return (
        <Fragment>
            <header className="sticky top-0 z-50 bg-white shadow-md w-full">
                <div className="flex flex-row justify-between items-center w-[90%] mx-auto py-3 gap-4">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="font-semibold text-2xl hover:text-blue-600 transition-colors">
                            Tripster
                        </Link>
                        
                        <nav className="hidden md:block">
                            <ul className="flex flex-row gap-6">
                                {['Home', 'About', 'Packages', 'Community'].map((item) => (
                                    <li key={item}>
                                        <Link 
                                            to={`/${item.toLowerCase()}`} 
                                            className="text-gray-700 hover:text-gray-900 hover:underline transition-colors text-sm font-medium"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex gap-3">
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
                        <Button 
                            variant="contained"
                            component={Link}
                            to="/signin"
                            sx={{
                                borderRadius: '20px',
                                textTransform: 'capitalize',
                                backgroundColor: '#213547',
                                '&:hover': {
                                    backgroundColor: '#1a2a3a',
                                    color: '#fff'
                                }
                            }}
                        >
                            Log In
                        </Button>
                    </div>
                </div>
            </header>

            <div 
                className="w-[90%] mx-auto rounded-xl relative"
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