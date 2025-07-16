import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme.js"
import { BrowserRouter } from 'react-router-dom';
import { FlightContextProvider } from './context/FlightContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <FlightContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FlightContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
