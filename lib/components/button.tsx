import type { ButtonHTMLAttributes, JSX } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <button className="bg-blue-500 text-white p-2 rounded-md" {...props} />;
}
