import React from "react";
import ReactDOM from "react-dom/client";

import { Button } from "../lib/main";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>Click me</Button>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector<HTMLDivElement>("#app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
