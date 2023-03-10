import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeContextProvider from "./context/themeContext";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
 
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
 
  </React.StrictMode>
);

