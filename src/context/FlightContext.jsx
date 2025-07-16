/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const initialValues = { flightDetails: [] };

const FlightContext = createContext(initialValues);

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FLIGHT_RESPONSE":
            return { ...state, flightDetails: action.response };
        default:
            return state;
    }
};

export const FlightContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <FlightContext.Provider value={{ state, dispatch }}>
            {children}
        </FlightContext.Provider>
    );
};

export const useFlightContext = () => useContext(FlightContext);
