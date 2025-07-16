import { useCallback, useState } from "react";
import {
    Box,
    Button,
    IconButton,
    TextField,
} from "@mui/material";
import {
    SwapHoriz,
} from "@mui/icons-material";

import DateInput from "../ui/DateInput";
import { useFlightContext } from "../../context/FlightContext";
import { findFlights } from "../../utils/FindFlights";
import Select from "../ui/Select";

export default function SearchHeader() {
    const { dispatch } = useFlightContext();
    const [fromCity, setFromCity] = useState({ label: "Mumbai", value: "BOM" });
    const [toCity, setToCity] = useState({ label: "Kolkata", value: "CCU" });
    const [date, setDate] = useState(new Date());

    const handleSwap = useCallback(() => {
        setFromCity(toCity);
        setToCity(fromCity);
    }, [fromCity, toCity]);

    const flightRecords = async () => {
        const dateStr = "2021-10-17"; 
        const res = await findFlights(fromCity.value, toCity.value, dateStr);
        if (res) {
            dispatch({
                type: "SET_FLIGHT_RESPONSE",
                response: res,
            });
        }
    };

    return (
        <Box className="w-full max-w-screen-xl mx-auto px-4 py-4">
            {/* Search Inputs */}
            <Box className="flex flex-wrap md:flex-nowrap items-center bg-white gap-4 p-4 rounded-md shadow-md mt-6">
                <Box className="flex items-center gap-3">
                    {/* FROM Input (Readonly) */}
                    <TextField
                        label="From"
                        value={fromCity.label}
                        InputProps={{ readOnly: true }}
                        className="w-[200px]"
                        variant="outlined"
                    />

                    {/* Swap Button */}
                    <IconButton
                        className="bg-gray-100 hover:bg-gray-200 rounded-full"
                        onClick={handleSwap}
                    >
                        <SwapHoriz />
                    </IconButton>

                    {/* TO Input (Readonly) */}
                    <TextField
                        label="To"
                        value={toCity.label}
                        InputProps={{ readOnly: true }}
                        className="w-[200px]"
                        variant="outlined"
                    />
                </Box>

                {/* Date Picker */}
                <Box className="flex gap-3">
                    <DateInput label="Depart" value={date} onChange={setDate} />
                </Box>

                {/* Search Button */}
                <Box className="ml-auto">
                    <Button
                        variant="contained"
                        onClick={flightRecords}
                        className="!bg-gradient-to-r from-[#29b0b6] to-[#0cc] !text-white !px-6 !py-2 !rounded-md !capitalize hover:!bg-[#45a049]"
                    >
                        Search
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
