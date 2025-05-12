//import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css"; //delete file
import App from "./components/App/App";
// Нормалізація стилів add
import "modern-normalize";
// Глобальні стилі (додатково) add
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
