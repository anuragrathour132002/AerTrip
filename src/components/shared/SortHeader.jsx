import { Button } from "@mui/material";
import { useState } from "react";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

export default function SortHeader({ flights = [], onSort }) {
    const [sortBy, setSortBy] = useState("fare");
    const [sortDir, setSortDir] = useState("asc");
    const [clickedKey, setClickedKey] = useState("");

    const sortOptions = [
        { key: "airline", label: "Airline", disabled: true},
        { key: "departureTime", label: "Depart" },
        { key: "arrivalTime", label: "Arrive" },
        { key: "flightDuration", label: "Duration" },
        { key: "smart", label: "Smart", disabled: true },
        { key: "fare", label: "Price" },
    ];

    const handleSortClick = (key) => {
        if (key === "smart" || key === "airline") return;
        const newDir = sortBy === key && sortDir === "asc" ? "desc" : "asc";
        setSortBy(key);
        setSortDir(newDir);
        setClickedKey(key);

        const sorted = [...flights].sort((a, b) => {
            let aVal = key === "fare" || key === "flightDuration" ? a[key] : new Date(`1970-01-01 ${a[key]}`);
            let bVal = key === "fare" || key === "flightDuration" ? b[key] : new Date(`1970-01-01 ${b[key]}`);
            return newDir === "asc" ? aVal - bVal : bVal - aVal;
        });

        onSort(sorted);
    };

    return (
        <div className="grid grid-cols-6 bg-[#eafff9] p-3 rounded-md shadow-sm text-sm font-semibold text-gray-700 sticky top-16 z-10">
            {sortOptions.map((opt) => (
                <div key={opt.key} className="flex items-center gap-1 cursor-pointer" onClick={() => handleSortClick(opt.key)}>
                    <span className={opt.disabled ? "text-gray-400 cursor-default" : ""}>{opt.label}</span>
                    {!opt.disabled && clickedKey === opt.key && (
                        sortDir === "asc" ? <SouthIcon fontSize="small" /> : <NorthIcon fontSize="small" />
                    )}
                </div>
            ))}
        </div>
    );
}
