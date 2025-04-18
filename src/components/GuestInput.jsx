import { Add, LocationOn, Remove } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';

const Counter = ({ label, value, min = 0, onIncrement, onDecrement }) => (
    <div className='flex justify-between items-center'>
        <p className='font-semibold text-sm'>{label}</p>
        <div className='flex items-center gap-6 border w-[120px] border-black p-2 rounded-md justify-between'>
            <Remove
                style={{ 
                    color: value > min ? '#3B8EEA' : 'gray', 
                    cursor: 'pointer', 
                    fontSize: '18px',
                    flexShrink: 0
                }} 
                onClick={onDecrement}
            />
            <p className='font-semibold text-sm w-[20px] text-center'>{value}</p>
            <Add 
                style={{ 
                    color: '#3B8EEA', 
                    cursor: 'pointer', 
                    fontSize: '18px',
                    flexShrink: 0
                }} 
                onClick={onIncrement}
            />
        </div>
    </div>
);

const GuestInput = () => {
    const [rooms, setRooms] = useState(1);
    const [children, setChildren] = useState(0);
    const [adults, setAdults] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const dialogRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target)) {
            setIsDialogOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatGuestText = () => {
        return `${adults} ${adults !== 1 ? 'adults' : 'adult'}, ${children} ${children !== 1 ? 'children' : 'child'}, ${rooms} ${rooms !== 1 ? 'rooms' : 'room'}`;
    };

    return (
        <div className='relative' ref={dialogRef}>
            <div className='w-[90%] flex flex-col gap-1'>
                <p className='text-sm ml-1'>Guests</p>
                <div className='relative'>
                    <TextField
                        sx={{ 
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                margin: 0,
                                backgroundColor: '#FFFFFF',
                                '& fieldset': {
                                    borderColor: 'grey.300',
                                },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LocationOn sx={{ color: 'action.active', fontSize: '18px' }} /> 
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Copenhagen"
                        size='small'
                        onClick={() => setIsDialogOpen(!isDialogOpen)}
                        value={formatGuestText()}
                        readOnly
                    />

                    {isDialogOpen && (
                        <div 
                            className='absolute flex flex-col gap-2 top-11 bg-white w-[100%] p-4 rounded-lg z-10' 
                            style={{ boxShadow: '0px 0px 6px 2px #0000001a' }}
                        >
                            <Counter
                                label="Adults"
                                value={adults}
                                min={1}
                                onIncrement={() => setAdults(adults + 1)}
                                onDecrement={() => adults > 1 && setAdults(adults - 1)}
                            />
                            <Counter
                                label="Children"
                                value={children}
                                onIncrement={() => setChildren(children + 1)}
                                onDecrement={() => children > 0 && setChildren(children - 1)}
                            />
                            <Counter
                                label="Rooms"
                                value={rooms}
                                min={1}
                                onIncrement={() => setRooms(rooms + 1)}
                                onDecrement={() => rooms > 1 && setRooms(rooms - 1)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GuestInput;