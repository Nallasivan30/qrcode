import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Advice from "./Forms/Advice";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Advice/>
  </StrictMode>
);
