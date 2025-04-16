import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='flex w-[90%] justify-between mx-auto py-5'>
                <div className='flex flex-col gap-5'>
                    <Link to="/" className="font-semibold text-2xl hover:text-blue-600 transition-colors">
                        Tripster
                    </Link>
                    <div>
                        <p className='text-sm'>Your favourite hotel booking experience</p>
                        <p className='text-sm'>Since 2024!</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold'>Help</p>
                    <p className='text-[13px]'>FAQ</p>
                    <p className='text-[13px]'>Customer service</p>
                    <p className='text-[13px]'>How to guide</p>
                    <p className='text-[13px]'>Contact us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;