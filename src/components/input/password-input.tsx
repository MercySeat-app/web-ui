import { type ComponentProps, useCallback, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "./input";
import { cn } from "../../lib/utils";

export interface PasswordInputProps extends Omit<ComponentProps<"input">, "type"> {
  visible?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
}

export function PasswordInput({
  className,
  visible: controlledVisible,
  onVisibilityChange,
  ...props
}: PasswordInputProps) {
  const [uncontrolledVisible, setUncontrolledVisible] = useState<boolean>(false);

  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : uncontrolledVisible;

  const handleToggleVisibility = useCallback(() => {
    if (isControlled) {
      onVisibilityChange?.(!visible);
    } else {
      setUncontrolledVisible((current) => !current);
    }
  }, [isControlled, visible, onVisibilityChange]);

  return (
    <div className="relative w-full">
      <Input
        {...props}
        data-slot="input"
        className={cn(className, "pr-10")}
        type={visible ? "text" : "password"}
      />
      <button
        type="button"
        className="absolute right-0 top-0 size-10 flex items-center justify-center"
        onClick={handleToggleVisibility}
      >
        {!visible && <EyeOff className="size-4 text-gray-300" />}
        {visible && <Eye className="size-4 text-gray-300" />}
      </button>
    </div>
  );
}
