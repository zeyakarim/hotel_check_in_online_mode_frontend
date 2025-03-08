import React, { Fragment, useEffect, useState } from 'react'

import StarRateIcon from '@mui/icons-material/StarRate';
import axiosInstance from '../utility/axios-instance';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    
    const fetchData = async ( ) => {
        axiosInstance
            .get('/hotels')
            .then((response) => {
                setData(response?.data?.data)
            })
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <Fragment>
            <h1>Tourism Website</h1>
            <div className='flex flex-col'>
                {data?.hotels?.map((hotel, index) => (
                    <div className='flex gap-[15px] border-b py-[20px]' key={index}>
                        <div className='flex gap-[6px] h-[268px]'>
                            <div className='w-[380px]'>
                                <img src={hotel?.images?.[0]} style={{ width:'100%', height:'100%' }} />
                            </div>
                            <div className='gap-[6px] flex flex-col'>
                                {hotel?.images?.filter((img, index) => index !== 0)?.map((image, index) => (
                                    <div key={index} className='w-[78px] h-[49px]'>
                                        <img src={image} style={{ width: '100%', height:'100%' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col justify-between w-[100%]'>
                            <div>
                                <h2 className='text-left font-bold text-xl'>{hotel?.name}</h2>
                                <p className='text-left' style={{ margin:0 }}>{hotel?.address}</p>
                                <div className='bg-[#52B520] w-[fit-content] flex gap-[6px]' style={{ color:'#fff', marginTop:20, padding: '0px 8px' }}>
                                    <p style={{ margin:0, fontWeight:500 }}>{hotel?.stars}</p>
                                    <StarRateIcon style={{ fontSize:'13px', margin:'auto'}} />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h2 className='text-left font-bold text-xl'>₹{hotel?.price}</h2>
                                <div className='gap-[10px] flex'>
                                    <button className='bg-transparent font-[600]' style={{ border: '1px solid black'}}>View Details</button>
                                    <button className='bg-[#52B520] font-[600]' style={{ color: 'white' }} onClick={() => navigate(`${hotel?.id}/booking`)}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Dashboard;