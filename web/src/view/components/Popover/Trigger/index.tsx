import { ReactNode } from "react";
import * as RdxPopover from "@radix-ui/react-popover";

export function PopoverTrigger({ children }: { children: ReactNode }) {
  return (
    <RdxPopover.Trigger
      asChild
    >
      {children}
    </RdxPopover.Trigger>
  );
}