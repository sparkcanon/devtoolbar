import React from "react";
import ReactDOM from "react-dom/client";

import "@sparkcanon/devtoolbar/dist/style.css";
// @ts-expect-error - self-contained module
import { DevToolbar } from "@sparkcanon/devtoolbar";

function App() {
  return <DevToolbar />;
}

ReactDOM.createRoot(document.querySelector<HTMLDivElement>("#app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
