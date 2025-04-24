import type { JSX } from "react";

export function DevToolbar(): JSX.Element {
  return (
    <div className="fixed -bottom-5 right-1/2 bg-white p-2 hover:bottom-0 w-fit transition-all duration-300 opacity-10 hover:opacity-100">
      <div>Click me</div>
    </div>
  );
}
