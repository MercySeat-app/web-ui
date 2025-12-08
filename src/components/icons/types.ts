import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  /**
   * Size in px/rem/etc. If provided, sets both width and height.
   * Defaults to 24.
   */
  size?: number | string;
};

/**
 * Helper to normalize size + basic a11y defaults.
 */
export function getIconSvgProps(
  size: IconProps["size"],
  overrideProps: SVGProps<SVGSVGElement> = {}
): SVGProps<SVGSVGElement> {
  const dimension = typeof size === "number" ? `${size}` : size ?? "24";
  const hasLabel = typeof overrideProps["aria-label"] === "string";

  return {
    width: dimension,
    height: dimension,
    role: hasLabel ? "img" : "presentation",
    "aria-hidden": hasLabel ? undefined : true,
    ...overrideProps,
  };
}
