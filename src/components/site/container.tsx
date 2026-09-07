import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  size = "7xl",
  className,
}: {
  children: ReactNode;
  size?: "3xl" | "4xl" | "5xl" | "7xl";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        size === "3xl" && "max-w-3xl",
        size === "4xl" && "max-w-4xl",
        size === "5xl" && "max-w-5xl",
        size === "7xl" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
