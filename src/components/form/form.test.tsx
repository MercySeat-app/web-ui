// src/components/form/form.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "./form";

type TestValues = {
  email: string;
};

function TestForm({ onSubmit }: { onSubmit: (data: TestValues) => void }) {
  const form = useForm<TestValues>({
    defaultValues: { email: "" }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                We’ll send confirmations to this address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}

describe("<Form /> primitives", () => {
  it("associates label and input via htmlFor / id and supports required star", () => {
    const onSubmit = vi.fn();

    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/Email/);
    expect(input).toBeInTheDocument();
    expect(input.tagName.toLowerCase()).toBe("input");

    const label = screen.getByText("Email").parentElement;
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("data-slot", "form-label");

    const star = screen.getByText("*");
    expect(star).toBeInTheDocument();
    expect(star.className).toContain("text-bright-red-600");
  });

  it("sets aria attributes correctly when there is no error", () => {
    const onSubmit = vi.fn();

    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/Email/);
    const description = screen.getByText(
      "We’ll send confirmations to this address."
    );

    expect(input).toHaveAttribute("aria-invalid", "false");

    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toBe(description.id);

    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  });

  it("displays error message and updates aria attributes when validation fails", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/Email/);
    const submit = screen.getByRole("button", { name: "Submit" });

    await user.click(submit);

    const message = await screen.findByText("Email is required");
    expect(message).toBeInTheDocument();
    expect(message).toHaveAttribute("data-slot", "form-message");

    expect(input).toHaveAttribute("aria-invalid", "true");

    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    const describedIds = describedBy!.split(" ");

    const description = screen.getByText(
      "We’ll send confirmations to this address."
    );

    expect(describedIds).toContain(description.id);
    expect(describedIds).toContain(message.id);
  });

  it("submits successfully when the field is valid and does not show error", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText(/Email/);
    const submit = screen.getByRole("button", { name: "Submit" });

    await user.type(input, "user@example.com");
    await user.click(submit);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      { email: "user@example.com" },
      expect.anything()
    );

    // after successful submit the error message should not be present
    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  });
});
