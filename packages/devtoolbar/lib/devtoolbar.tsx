import type { JSX } from "react";

export function DevToolbar({ title }: { title: string }): JSX.Element {
  console.warn(title);
  return <div>DevToolbar</div>;
}
