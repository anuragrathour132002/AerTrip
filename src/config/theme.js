import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    shape: {
        borderRadius: 10,
    },
    palette: {
        type: "light",
        primary: {
            main: "#1adcbb",
        },
        secondary: {
            main: "#DEECF9",
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                },
            },
        },
    },
    overrides: {
        MuiInputBase: {
            input: {
                "&:-webkit-autofill": {
                    transitionDelay: "9999s",
                    transitionProperty: "background-color, color",
                },
            },
        },
    },
    typography: {
        fontFamily: ["SourceSansPro Regular", "sans-serif"].join(","),
        button: {
            textTransform: "none",
        },
    },
});
