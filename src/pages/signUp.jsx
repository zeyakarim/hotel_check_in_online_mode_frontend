import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axiosInstance from '../utility/axios-instance';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: event?.target?.name?.value,
            email: event?.target?.email?.value,
            phone: event?.target?.phone?.value,
            password: event?.target?.password?.value,
        }

        axiosInstance
            .post(`/users/signup`,{ data })
            .then((res) =>{
                if (res?.data?.success) {
                    navigate('/signin')
                } else {
                    alert(res?.data?.message)
                }
            });
    }

    return (
        <div className='flex gap-4'>
            <form method="post" className='flex flex-col m-auto' style={{ width:'30%'}} onSubmit={handleSubmit}>
                <h3 className='font-[500] text-3xl'>Sign Up</h3>
                <h2 className='font-bold text-3xl mt-4 mb-2' style={{ fontStyle:'italic', fontFamily:'auto'}}>
                    It's <span className='text-[#FBB026]'>T</span>ime to <span className='text-[#FBB026]'>T</span>ravel
                </h2>
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

                <TextField
                    margin="normal"
                    required
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    id="password"
                    autoComplete='off'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <div className='flex items-start mt-3'>
                    <button type='submit' className='bg-[#00CCE5] text-white'>Submit</button>
                </div>
            </form>
            <div className='w-[70%]'>
                <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asadphoto-1268855.jpg&fm=jpg" alt=""  />
            </div>
        </div>
    )
}

export default SignUp;