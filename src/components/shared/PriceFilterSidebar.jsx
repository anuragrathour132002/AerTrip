import { Box, Slider, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function PriceFilterSidebar({ flights = [], onPriceFilter }) {
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        if (flights.length > 0) {
            const prices = flights.map(f => f.fare);
            const min = Math.min(...prices);
            const max = Math.max(...prices);
            setMinPrice(min);
            setMaxPrice(max);
            setPriceRange([min, max]);
        }
    }, [flights]);

    const handleSliderChange = (_, newValue) => {
        setPriceRange(newValue);
        const filtered = flights.filter(
            (f) => f.fare >= newValue[0] && f.fare <= newValue[1]
        );
        onPriceFilter(filtered);
    };

    const handleClear = () => {
        setPriceRange([minPrice, maxPrice]);
        onPriceFilter(flights);
    };

    return (
        <div className="bg-white p-4 shadow rounded sticky top-20">
            <Typography variant="subtitle1" className="mb-2 font-semibold text-gray-700">
                Price Filter
            </Typography>

            <Slider
                value={priceRange}
                onChange={handleSliderChange}
                min={minPrice}
                max={maxPrice}
                valueLabelDisplay="auto"
                sx={{ color: "#00c896" }}
            />

            <Box className="flex justify-between text-xs text-gray-600 mb-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
            </Box>

            <Button onClick={handleClear} className="!text-sm text-gray-500">
                Clear Filters
            </Button>
        </div>
    );
}
