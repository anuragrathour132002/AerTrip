import { useState, useCallback, useEffect, memo } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { format, addDays, isBefore, startOfToday } from "date-fns";

function DateInput({
    label = "Dpart",
    value = "",
    onChange = () => { },
    className = "",
}) {
    const [selectedDate, setSelectedDate] = useState(value || new Date());
    const today = startOfToday();

    const handleDateChange = useCallback(
        (days) => {
            setSelectedDate((current) => {
                const newDate = addDays(current, days);
                return isBefore(newDate, today) ? current : newDate;
            });
        },
        [today]
    );

    useEffect(() => {
        onChange(selectedDate);
    }, [selectedDate]);

    return (
        <Box className={`relative flex items-end ml-10 gap-4 ${className}`}>
            {/* Date Input */}
            <TextField
                label={label}
                value={format(selectedDate, "d MMM")}
                variant="outlined"
                sx={{
                    width: "210px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderBottom: "1px solid gray",
                        borderRadius: 0,
                    },
                    "& .MuiInputBase-root": {
                        fontSize: "20px",
                        fontWeight: 600,
                        fontFamily: "inherit",
                        paddingBottom: "2px",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderBottom: "2px solid rgb(0, 208, 149)",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgb(0, 208, 149)",
                    },
                }}
                InputProps={{
                    inputComponent: ({ inputRef, ...rest }) => (
                        <>
                            <input
                                ref={inputRef}
                                {...rest}
                                type="text"
                                className="bg-transparent outline-none w-full mt-6"
                            />
                            {selectedDate && (
                                <span className="absolute ml-[86px] mt-1 text-sm text-gray-500 font-medium">
                                    {format(selectedDate, "EEE")}
                                </span>
                            )}
                        </>
                    ),
                }}
            />

            {/* Navigation Buttons */}
            <Box className="flex gap-2 ml-2">
                <IconButton
                    size="small"
                    onClick={() => handleDateChange(-1)}
                    disabled={isBefore(addDays(selectedDate, -1), today)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                    <ChevronLeft fontSize="small" />
                </IconButton>
                <IconButton
                    size="small"
                    onClick={() => handleDateChange(1)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                    <ChevronRight fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
}

export default memo(DateInput);
