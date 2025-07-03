import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import EmployeeProvider from "./context/EmployeeProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </StrictMode>
);
