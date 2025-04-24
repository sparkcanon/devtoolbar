import React from "react";
import ReactDOM from "react-dom/client";

import { DevToolbar } from "../lib/main";

function App() {
  return (
    <DevToolbar />
  );
}

ReactDOM.createRoot(document.querySelector<HTMLDivElement>("#app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
