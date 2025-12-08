import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Design-system typography primitive for MercySeat. Wraps headings, body text, captions, and overlines using the Manrope font with consistent sizing and spacing.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "heading-1",
        "heading-2",
        "heading-3",
        "heading-4",
        "heading-5",
        "heading-6",
        "body-lg",
        "body-md",
        "body-sm",
        "caption",
        "overline",
      ],
    },
    as: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Scale: Story = {
  render: () => (
    <div className="space-y-6">
      <section>
        <Typography variant="overline" className="text-gray-500">
          Headings
        </Typography>
        <div className="mt-2 space-y-2">
          <Typography variant="heading-1">
            Heading 1 / 40px / semibold
          </Typography>
          <Typography variant="heading-2">Heading 2 / 32px / bold</Typography>
          <Typography variant="heading-3">Heading 3 / 24px / bold</Typography>
          <Typography variant="heading-4">
            Heading 4 / 20px / semibold
          </Typography>
          <Typography variant="heading-5">
            Heading 5 / 16px / semibold
          </Typography>
          <Typography variant="heading-6">
            Heading 6 / 14px / semibold
          </Typography>
        </div>
      </section>

      <section>
        <Typography variant="overline" className="text-gray-500">
          Body
        </Typography>
        <div className="mt-2 space-y-2">
          <Typography variant="body-lg">
            Body LG – 18px regular, line-height 1.5, letter-spacing 0.15px.
          </Typography>
          <Typography variant="body-md">
            Body MD – 16px regular, line-height 1.5, letter-spacing 0.15px.
          </Typography>
          <Typography variant="body-sm">
            Body SM – 14px regular, line-height 1.5, letter-spacing 0.15px.
          </Typography>
        </div>
      </section>

      <section>
        <Typography variant="overline" className="text-gray-500">
          Caption & Overline
        </Typography>
        <div className="mt-2 space-y-1">
          <Typography variant="caption">
            Caption – 12px regular, line-height 1.66, letter-spacing 0.4px.
          </Typography>
          <Typography variant="overline">
            Overline – 12px regular, line-height 2.66, letter-spacing 1px,
            uppercase.
          </Typography>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Typography scale showing all variants with their role and sizing.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "body-md",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};
