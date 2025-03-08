import React from "react";
import dayjs from "dayjs"; // Import dayjs for proper date handling
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

const DateRange = ({ checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, checkinDateRef }) => {
    return (
        <div style={{ display: "flex", gap: "16px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Check-In Date"
                    ref={checkinDateRef}
                    sx={{
                        "& .MuiOutlinedInput-input": { padding: "9.5px 6px", fontSize: "14px" },
                        "& .MuiSvgIcon-root": { fontSize: "18px" },
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#0000003b !important" },
                        "& .Mui-error": { color: "#00000099 !important" },
                    }}
                    value={checkinDate ? dayjs(checkinDate) : null} // Convert to dayjs object
                    onChange={(newValue) => setCheckinDate(newValue)}
                />
                <DatePicker
                    label="Check-Out Date"
                    sx={{
                        "& .MuiOutlinedInput-input": { padding: "9.5px 6px", fontSize: "14px" },
                        "& .MuiSvgIcon-root": { fontSize: "18px" },
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#0000003b !important" },
                        "& .Mui-error": { color: "#00000099 !important" },
                    }}
                    value={checkoutDate ? dayjs(checkoutDate) : null} // Convert to dayjs object
                    onChange={(newValue) => setCheckoutDate(newValue)}
                />
            </LocalizationProvider>
        </div>
    );
};

export default DateRange;