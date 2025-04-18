import { LocationOn } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const DestinationInput = () => {
    return (
        <div className='w-[90%] flex flex-col gap-1'>
            <p className='text-sm ml-1'>Destination</p>
            <TextField
                sx={{ 
                    width:'100%',
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
                            <LocationOn sx={{ color: 'action.active', fontSize:'18px' }} /> 
                        </InputAdornment>
                    ),
                }}
                placeholder="Copenhagen"
                size='small'
            />
        </div>
    )
}

export default DestinationInput;