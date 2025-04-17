import React, { forwardRef } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const sharedStyles = {
    width: '80%',
    "& .MuiOutlinedInput-input": { padding: "9.5px 15px", fontSize: "14px" },
    "& .MuiSvgIcon-root": { fontSize: "18px" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#0000003b !important" },
    "& .Mui-error": { color: "#00000099 !important" },
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
        margin: 0,
        backgroundColor: '#FFFFFF',
        '& fieldset': {
            borderColor: 'grey.300',
        },
    },
};

const DatePickerField = forwardRef(({ label, value, onChange, ...props }, ref) => (
    <div className="flex flex-col gap-1">
        <p className='text-sm ml-1'>{label}</p>
        <DatePicker
            sx={sharedStyles}
            value={value ? dayjs(value) : null}
            onChange={onChange}
            ref={ref}
            {...props}
        />
    </div>
));

const DateRange = ({ checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, checkinDateRef }) => {
    return (
        <div className="flex flex-col gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePickerField
                    label="Check-in date"
                    value={checkinDate}
                    onChange={setCheckinDate}
                    ref={checkinDateRef}
                />
                <DatePickerField
                    label="Check-out date"
                    value={checkoutDate}
                    onChange={setCheckoutDate}
                />
            </LocalizationProvider>
        </div>
    );
};

export default DateRange;