import type { JSX } from "react";

export function DevToolbar(): JSX.Element {
  return (
    <div className="dev-toolbar fixed -bottom-5 right-1/2 bg-white dark:bg-gray-800 p-2 hover:bottom-0 w-fit transition-all duration-300 opacity-10 hover:opacity-100 shadow-lg rounded-t-md">
      <div className="text-black dark:text-white font-medium">Developer Tools</div>
    </div>
  );
}
