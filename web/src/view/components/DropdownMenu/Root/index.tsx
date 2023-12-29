import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

export function DropdownMenuRoot({ children }: { children: ReactNode }) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  );
}