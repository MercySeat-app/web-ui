import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { Logo } from "./logo";

type LogoLockupProps = HTMLAttributes<HTMLDivElement> & {
  size?: number | string;
};

export function LogoLockup({ size = 32, className, ...props }: LogoLockupProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} {...props}>
      <Logo size={size} />
      <span className="font-manrope text-base font-normal leading-none text-white">MercySeat</span>
    </div>
  );
}
