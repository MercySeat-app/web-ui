import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react';
import { OTPInput } from 'input-otp';
type BaseOTPInputProps = ComponentPropsWithoutRef<typeof OTPInput>;
export type InputOTPProps = Omit<BaseOTPInputProps, "render" | "children"> & {
    children: ReactNode;
    containerClassName?: string;
};
declare function InputOTP({ className, containerClassName, ...props }: InputOTPProps): import("react/jsx-runtime").JSX.Element;
declare function InputOTPGroup({ className, ...props }: ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: ComponentProps<"div"> & {
    index: number;
}): import("react/jsx-runtime").JSX.Element;
declare function InputOTPSeparator({ ...props }: ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
//# sourceMappingURL=input-otp.d.ts.map