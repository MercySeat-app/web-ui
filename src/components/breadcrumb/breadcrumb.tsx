"use client";

import React, { type ComponentProps } from "react";
import { ChevronRightIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

export function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Breadcrumb"
      data-slot="breadcrumb"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

export function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("flex items-center justify-start gap-2", className)}
      {...props}
    />
  );
}

export function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("flex justify-start items-center gap-x-1", className)}
      {...props}
    />
  );
}

export function BreadcrumbLink({
  asChild,
  className,
  ...props
}: ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbSeparator() {
  return (
    <ChevronRightIcon
      data-slot="breadcrumb-separator"
      aria-hidden="true"
      className="size-4 text-gray-300 shrink-0"
    />
  );
}
