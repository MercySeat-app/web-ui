import { ComponentProps } from 'react';
import { DayPicker, DayButton, Locale } from 'react-day-picker';
import { Button } from '../button';
/**
 * MercySeat-styled wrapper around `react-day-picker`'s `DayPicker`.
 *
 * The component wires the upstream DayPicker into the MercySeat design system:
 * - applies Tailwind classes to every slot (`root`, `month`, `month_grid`,
 *   `day`, `range_start`, etc.) so the calendar matches the rest of the UI
 *   without consumers having to style each slot themselves;
 * - replaces the default `Chevron` glyphs with `lucide-react` icons that
 *   automatically flip in RTL contexts;
 * - swaps the day cell renderer for {@link CalendarDayButton}, so each day is
 *   rendered as a MercySeat {@link Button} (giving it focus rings, hover
 *   states, and the right typography);
 * - exposes a `buttonVariant` prop to control the navigation buttons' look so
 *   the calendar can blend into either a popover, a card, or a standalone
 *   surface.
 *
 * All other props are forwarded to the underlying `DayPicker`, which means
 * selection modes (`single`, `multiple`, `range`), `selected`/`onSelect`,
 * `disabled` matchers, `min`/`max` etc. all work as documented upstream.
 *
 * @example Single date
 * ```tsx
 * const [date, setDate] = useState<Date | undefined>();
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 * ```
 *
 * @example Date range with dropdown navigation
 * ```tsx
 * const [range, setRange] = useState<DateRange | undefined>();
 * <Calendar
 *   mode="range"
 *   captionLayout="dropdown"
 *   selected={range}
 *   onSelect={setRange}
 * />
 * ```
 *
 * @see https://daypicker.dev/ for the full list of supported `DayPicker` props.
 */
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, locale, formatters, components, ...props }: ComponentProps<typeof DayPicker> & {
    /**
     * Visual variant applied to the previous/next month navigation buttons.
     * Maps to a {@link Button} `variant` so the chrome can match the surrounding
     * surface (e.g. ghost inside popovers, outline on a plain card).
     *
     * @default "gray-ghost"
     */
    buttonVariant?: ComponentProps<typeof Button>["variant"];
}): import("react/jsx-runtime").JSX.Element;
/**
 * Renderer for a single day cell inside {@link Calendar}.
 *
 * Plugged into `DayPicker`'s `components.DayButton`, it converts the upstream
 * day button into a MercySeat {@link Button} so day cells get consistent
 * focus rings, sizing, and disabled styling. It also:
 * - mirrors `react-day-picker`'s modifier flags (`selected`, `range_start`,
 *   `range_middle`, `range_end`) onto `data-*` attributes so they can be
 *   targeted with Tailwind variant selectors (`data-[range-start=true]:…`);
 * - auto-focuses the button when `modifiers.focused` is true so keyboard
 *   navigation in the parent grid keeps DOM focus in sync;
 * - exposes the formatted date via `data-day` for tests and analytics.
 *
 * Consumers should not render this component directly — pass it implicitly
 * through `<Calendar />`, or via `components.DayButton` if customising another
 * `DayPicker`.
 */
declare function CalendarDayButton({ className, day, modifiers, locale, ...props }: ComponentProps<typeof DayButton> & {
    /**
     * Locale used to format the `data-day` attribute on the rendered button.
     * Typically the same locale passed to the parent `<Calendar />`.
     */
    locale?: Partial<Locale>;
}): import("react/jsx-runtime").JSX.Element;
export { Calendar, CalendarDayButton };
//# sourceMappingURL=calendar.d.ts.map