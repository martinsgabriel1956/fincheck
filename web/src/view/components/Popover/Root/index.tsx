import { ReactNode } from "react";
import * as RdxPopover from "@radix-ui/react-popover";

export function PopoverRoot({ children }: { children: ReactNode }) {
  return (
    <RdxPopover.Root>
      {children}
    </RdxPopover.Root>
  );
}