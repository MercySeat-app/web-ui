import { SVGProps } from 'react';
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
export declare function getIconSvgProps(size: IconProps["size"], overrideProps?: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement>;
//# sourceMappingURL=types.d.ts.map