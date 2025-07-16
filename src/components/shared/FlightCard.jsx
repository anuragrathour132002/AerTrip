import { memo, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function FlightCard({ data }) {
    const getFlightDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    const flightDuration = useMemo(
        () => getFlightDuration(data?.flightDuration),
        [data?.flightDuration]
    );

    const getAirlineLogo = useMemo(() => {
        switch (data?.airline) {
            case "UK":
                return "/Vistara-Image.png";
            case "AI":
                return "/air india.png";
            case "6E":
                return "/indigo.png";
            default:
                return "/air india.png";
        }
    }, [data?.airline]);

    const getAirlineName = useMemo(() => {
        switch (data?.airline) {
            case "UK":
                return "Vistara";
            case "AI":
                return "Air India";
            case "6E":
                return "Indigo";
            default:
                return "Air India";
        }
    }, [data?.airline]);

    return (
        <div className="w-full bg-white rounded-lg shadow p-4">
            <div className="flex flex-wrap items-center justify-start gap-6">
                {/* Airline */}
                <div className="flex items-center w-[140px]">
                    <img
                        src={getAirlineLogo}
                        alt={data.airline}
                        className="w-8 h-8 object-cover rounded"
                    />
                    <span className="text-sm text-gray-700 font-medium ml-2">
                        {getAirlineName}
                    </span>
                </div>

                {/* Depart */}
                <div className="text-center w-[30px]">
                    <div className="text-sm font-semibold text-gray-800">
                        {data?.departureTime}
                    </div>
                    <div className="text-xs text-gray-500">{data?.from}</div>
                </div>

                {/* Arrive */}
                <div className="text-center w-[200px]">
                    <div className="text-sm font-semibold text-gray-800">
                        {data?.arrivalTime}
                    </div>
                    <div className="text-xs text-gray-500">{data?.to}</div>
                </div>

                {/* Duration */}
                <div className="text-center w-[90px]">
                    <div className="text-sm text-gray-800 font-medium">{flightDuration}</div>
                    <div className="text-xs text-gray-500">1 Stop</div>
                </div>

                {/* Smart Icon */}
                <div className="flex items-center justify-center w-[120px]">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
                    <InfoOutlinedIcon className="text-gray-400" fontSize="small" />
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-end flex-1 gap-4 w-[50px]">
                    <div className="text-right">
                        <div className="text-base font-semibold text-gray-800 mb-1">
                            ₹{data?.fare}
                        </div>
                        <button className="text-xs px-3 py-1 border border-[#0ac6a0] text-[#0ac6a0] rounded hover:bg-[#0ac6a0] hover:text-white transition">
                            Book
                        </button>
                    </div>
                    <MoreVertIcon fontSize="small" className="text-gray-500" />
                </div>
            </div>
        </div>
    );
}

export default memo(FlightCard);
