import { SVGProps } from 'react';
export type LogoProps = SVGProps<SVGSVGElement> & {
    /**
     * Size in px/rem/etc. If provided, sets both width and height.
     * Defaults to 48 (pixels).
     */
    size?: number | string;
};
/**
 * MercySeat mark (icon-only).
 * Scales based on the `size` prop while preserving the original viewBox.
 */
export declare function Logo({ size, className, ...props }: LogoProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=logo.d.ts.map