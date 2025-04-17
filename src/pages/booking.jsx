import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../utility/axios-instance';
import StarRateIcon from '@mui/icons-material/StarRate';
import DateRange from '../components/DateRange';
import { Add, Remove } from '@mui/icons-material';
import { TextField } from '@mui/material';


const Booking = () => {
    const [hotelDetails, setHotelDetails] = useState({});
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] =  useState(0);
    const [bookingSuccessfull, setBookingSuccessfull] = useState(false);
    const [bookingId, setBookingId] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    const fetchDetails = async () => {
        axiosInstance
            .get(`/hotels/${id}`)
            .then((response) => {
                if (response?.data?.success) {
                    setHotelDetails(response?.data?.data)
                } else {
                    alert(response?.data?.message)
                }
            })
    }

    useEffect(() => {
        fetchDetails()
    }, []);

    const handleNegativeChild = () => {
        if (parseInt(childrenCount) > 0) {
            setChildrenCount(parseInt(childrenCount) - 1)
        }
    }

    const handleNegativeAdult = () => {
        if (parseInt(adultCount) > 0) {
            setAdultCount(parseInt(adultCount) - 1)
        }
    }

    const getFormattedDate = (inputDate) => {
        const dateObject = new Date(inputDate);
        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObject.getDate().toString().padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!(checkinDate && checkoutDate && adultCount > 0)) {
            alert('Please fill all data')
        } 

        const data = {
            name: event?.target?.name?.value,
            email: event?.target?.email?.value,
            phone: event?.target?.phone?.value,
            checkin_time: getFormattedDate(checkinDate),
            checkout_time: getFormattedDate(checkoutDate),
            adult: adultCount,
            hotel_id: id,
            children: childrenCount
        }
        
        axiosInstance
            .post(`/bookings/create`,{ data })
            .then((res) =>{
                if (res?.data?.success) {
                    alert('Your Booking is Succesfull')
                    setBookingId(res?.data?.data?.id)
                    setBookingSuccessfull(true)
                } else {
                    alert(res?.data?.message)
                }
            });
    }

    return (
        <div>

            <div className="flex justify-between gap-5">
                <div className='flex flex-col gap-6 p-6' style={{ boxShadow: "0px 0px 4px 3px lightgray", borderRadius: 10 }}>
                    <DateRange checkinDate={checkinDate} setCheckinDate={setCheckinDate} checkoutDate={checkoutDate} setCheckoutDate={setCheckoutDate} />
                    <div className='flex justify-between'>
                        <p className='font-bold'>Adults</p>
                        <div className='flex gap-6 border w-fit border-black p-2 rounded-md'>
                            <Remove style={{ color: adultCount > 0 ? '#3B8EEA': 'gray', cursor:'pointer'}} onClick={handleNegativeAdult} />
                            <p className='font-bold'>{adultCount}</p>
                            <Add style={{ color: '#3B8EEA', cursor:'pointer' }} onClick={() => setAdultCount(adultCount + 1)}/>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Children</p>
                        <div className='flex gap-6 border w-fit border-black p-2 rounded-md'>
                            <Remove style={{ color: childrenCount > 0 ? '#3B8EEA': 'gray', cursor:'pointer'}} onClick={handleNegativeChild}   />
                            <p className='font-bold'>{childrenCount}</p>
                            <Add style={{ color: '#3B8EEA', cursor:'pointer'}} onClick={() => setChildrenCount(childrenCount + 1)} />
                        </div>
                    </div>
                </div>

                <div className='p-6' style={{ boxShadow: "0px 0px 4px 3px lightgray", borderRadius: 10 }}>
                    <h2 className='font-bold text-3xl text-left'>{hotelDetails?.name}</h2>
                    <p className='text-[gray]'>{hotelDetails?.address}</p>
                    <div className='flex gap-[8px] border-b pb-4' style={{ marginTop:20 }}>
                        <div className='bg-[#52B520] w-[fit-content] flex gap-[6px]' style={{ color:'#fff', padding: '0px 8px' }}>
                            <p style={{ margin:0, fontWeight:500 }}>{hotelDetails?.stars}</p>
                            <StarRateIcon style={{ fontSize:'13px', margin:'auto'}} />
                        </div>
                        <p className='text-[gray] text-sm'>(83 Ratings) &#x2022; Very Good</p>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <p className='text-[gray] text-sm'>Room Price for 1 Night</p>
                        <p className='text-[gray] text-sm'>₹{hotelDetails?.price}</p>
                    </div>
                    <div className='flex justify-between py-3 border-b'>
                        <p className='text-[gray] text-sm'>Instant Discount</p>
                        <p className='text-[gray] text-sm'>₹100</p>
                    </div>
                    <div className='flex justify-between pt-5'>
                        <p className='text-[gray] text-sm'>Payble Amount</p>
                        <p className='font-bold text-2xl'>₹{parseInt(hotelDetails?.price) - 100}</p>
                    </div>
                </div>
            </div>

            <form method="post" onSubmit={handleSubmit}>
                <div className='flex gap-5 mt-4'>
                    <TextField
                        label='Name'
                        name='name'
                        type='text'
                        autoComplete='off'
                        placeholder='Enter your Name'
                        required
                        margin='normal'
                        autoFocus
                    />
                    <TextField 
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='Enter your email'
                        required
                        margin='normal'
                        autoComplete='off'
                    />
                    <TextField 
                        label='Phone'
                        type='number'
                        name='phone'
                        placeholder='Enter your phone number'
                        required
                        margin='normal'
                        autoComplete='off'
                    />

                    <div className='m-auto'>
                        {!bookingSuccessfull && (
                            <button className='bg-[#52B520] font-[600]' style={{ color: 'white' }} type='submit'>Book Now</button>
                        )}

                        {bookingSuccessfull && (
                            <button className='bg-[#52B520] font-[600]' style={{ color: 'white' }} onClick={() => navigate(`/checkin/${bookingId}`)}> Check-IN</button>
                        )}
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Booking;