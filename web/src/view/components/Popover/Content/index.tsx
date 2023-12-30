import { ReactNode } from "react";
import * as RdxPopover from "@radix-ui/react-popover";
import { cn } from "@/app/utils/cn";

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}
export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          "space-y-2 rounded-2xl bg-white p-4 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[99]",
          "data-[side=bottom]:animate-slide-up-and-fade",
          "data-[side=top]:animate-slide-down-and-fade",
          className
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}
