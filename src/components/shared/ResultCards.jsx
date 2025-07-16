import { useEffect, useState } from "react";
import { useFlightContext } from "../../context/FlightContext";
import FlightCard from "./FlightCard";
import SortHeader from "./SortHeader";
import PriceFilterSidebar from "./PriceFilterSidebar";

function CardResults() {
    const { state } = useFlightContext();
    const allFlights = state?.flightDetails || [];

    const [filteredFlights, setFilteredFlights] = useState(allFlights);

    useEffect(() => {
        setFilteredFlights(allFlights);
    }, [state?.flightDetails]);

    const handlePriceFilter = (flights) => {
        setFilteredFlights(flights);
    };

    const handleSort = (flights) => {
        setFilteredFlights(flights);
    };

    return (
        <div className="w-[70%] mx-auto py-6">
            {filteredFlights.length > 0 ? (
                <div className="flex gap-6 mt-4">
                    <div className="w-[250px]">
                        <PriceFilterSidebar flights={allFlights} onPriceFilter={handlePriceFilter} />
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 space-y-4">
                        <SortHeader flights={filteredFlights} onSort={handleSort} />
                        {filteredFlights.map((flight, index) => (
                            <FlightCard key={index} data={flight} />
                        ))}
                    </div>
                </div>
            ) : (
                <> </>
            )}
        </div>
    );
}

export default CardResults;
