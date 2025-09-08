// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./index.css"; // if using Tailwind or CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
