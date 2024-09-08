import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'

import { Provider } from "react-redux";
import store from "./store/store";

import { THEME } from './ThemeProvider/Theme.js';
import { ThemeProvider } from '@mui/material';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
