import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// src/main.tsx or src/index.tsx
import "@fontsource/ibm-plex-sans"; // defaults to weight 400
import "@fontsource/ibm-plex-sans/600.css"; // optional for semibold
import "@fontsource/ibm-plex-sans/700.css"; // optional for bold


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
