import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className="block text-sm font-medium text-gray-700">
      {props.children}
    </label>
  );
}
