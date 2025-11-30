/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/input-otp.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { OTPInputContext } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "./input-otp";

describe("<InputOTP />", () => {
  it("renders the OTP input container and applies className and containerClassName", () => {
    const handleChange = (_value: string) => { console.log(_value); };

    render(
      <InputOTP
        maxLength={4}
        value=""
        onChange={handleChange}
        containerClassName="custom-container"
        className="custom-input"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );

    // Element that receives `data-slot="input-otp"` gets `className`
    const root = document.querySelector(
      '[data-slot="input-otp"]'
    ) as HTMLElement;

    expect(root).toBeInTheDocument();
    expect(root.className).toContain("disabled:cursor-not-allowed");
    expect(root.className).toContain("custom-input");

    // Somewhere in the subtree, `containerClassName` should appear
    const containerWithCustomClass = document.querySelector(
      ".custom-container"
    ) as HTMLElement;

    expect(containerWithCustomClass).toBeInTheDocument();
  });
});

describe("<InputOTPGroup />", () => {
  it("renders a group container with base classes and data-slot", () => {
    render(<InputOTPGroup>Group content</InputOTPGroup>);

    const group = document.querySelector(
      '[data-slot="input-otp-group"]'
    ) as HTMLElement;

    expect(group).toBeInTheDocument();
    expect(group.className).toContain("flex");
    expect(group.className).toContain("items-center");
    expect(group.className).toContain("gap-2");
    expect(group).toHaveTextContent("Group content");
  });
});

describe("<InputOTPSlot />", () => {
  it("renders the character for the given index from context", () => {
    const contextValue = {
      slots: [
        {
          char: "3",
          hasFakeCaret: false,
          isActive: false
        }
      ]
    } as any;

    render(
      <OTPInputContext.Provider value={contextValue}>
        <InputOTPSlot index={0} />
      </OTPInputContext.Provider>
    );

    const slot = document.querySelector(
      '[data-slot="input-otp-slot"]'
    ) as HTMLElement;

    expect(slot).toBeInTheDocument();
    expect(slot).toHaveTextContent("3");
    expect(slot.getAttribute("data-active")).toBe("false");
  });

  it("shows the fake caret and active styling when hasFakeCaret and isActive are true", () => {
    const contextValue = {
      slots: [
        {
          char: "",
          hasFakeCaret: true,
          isActive: true
        }
      ]
    } as any;

    render(
      <OTPInputContext.Provider value={contextValue}>
        <InputOTPSlot index={0} />
      </OTPInputContext.Provider>
    );

    const slot = document.querySelector(
      '[data-slot="input-otp-slot"]'
    ) as HTMLElement;

    expect(slot).toBeInTheDocument();
    expect(slot.getAttribute("data-active")).toBe("true");
    expect(slot.className).toContain("data-[active=true]:bg-white");

    const caret = slot.querySelector(".animate-caret-blink");
    expect(caret).toBeInTheDocument();
  });
});

describe("<InputOTPSeparator />", () => {
  it("renders a separator element with the correct role and data-slot", () => {
    render(<InputOTPSeparator />);

    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("data-slot", "input-otp-separator");

    const icon = separator.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
