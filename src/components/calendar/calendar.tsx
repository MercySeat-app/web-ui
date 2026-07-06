"use client";

import { type ComponentProps, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, getDefaultClassNames, type DayButton, type Locale } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "../button";

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
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "gray-ghost",
  locale,
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker> & {
  /**
   * Visual variant applied to the previous/next month navigation buttons.
   * Maps to a {@link Button} `variant` so the chrome can match the surrounding
   * surface (e.g. ghost inside popovers, outline on a plain card).
   *
   * @default "gray-ghost"
   */
  buttonVariant?: ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "cn-calendar-dropdown-root relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("absolute inset-0 bg-popover opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "cn-calendar-caption text-sm"
            : "cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day,
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end,
        ),
        today: cn(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("cn-rtl-flip size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("cn-rtl-flip size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: ({ ...props }) => <CalendarDayButton locale={locale} {...props} />,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

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
function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: ComponentProps<typeof DayButton> & {
  /**
   * Locale used to format the `data-day` attribute on the rendered button.
   * Typically the same locale passed to the parent `<Calendar />`.
   */
  locale?: Partial<Locale>;
}) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="gray-ghost"
      size="sm"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex size-7 aspect-square w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-blue-hepatica-600 data-[range-end=true]:text-white data-[range-end=true]:hover:bg-blue-hepatica-700 data-[range-end=true]:focus:bg-blue-hepatica-600 data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-gray-25 data-[range-middle=true]:text-gray-700 data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-blue-hepatica-600 data-[range-start=true]:text-white data-[range-start=true]:hover:bg-blue-hepatica-700 data-[range-start=true]:focus:bg-blue-hepatica-600 data-[selected-single=true]:bg-blue-hepatica-600 data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-blue-hepatica-700 data-[selected-single=true]:focus:bg-blue-hepatica-600 data-[selected-single=true]:focus:text-white [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
