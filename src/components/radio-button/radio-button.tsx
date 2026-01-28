import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export type RadioButtonProps = {
  checked: boolean;
  onChange: (arg: string) => void;
  value: string;
  children: ReactNode;
  name: string;
  disabled?: boolean;
};

export function RadioButton({
  checked,
  children,
  name,
  onChange,
  value,
  disabled = false,
}: RadioButtonProps) {
  const id = `${name}-${value}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        "group w-full p-4 gap-1 flex items-start justify-start rounded-lg border border-gray-50 bg-white transition-colors",
        "focus-within:ring-2 focus-within:ring-blue-hepatica-600",
        {
          "border-2 border-blue-hepatica-600 bg-blue-hepatica-100": checked,
          "opacity-60 cursor-not-allowed": disabled,
        },
      )}
    >
      <div className="size-10 flex-items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="sr-only"
        />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
            {
              "border-2 border-blue-hepatica-600": checked,
            },
          )}
        >
          <div
            className={cn("size-2 rounded-full bg-transparent", {
              "bg-blue-hepatica-600": checked,
            })}
          />
        </div>
      </div>
      <div className="">{children}</div>
    </label>
  );
}
