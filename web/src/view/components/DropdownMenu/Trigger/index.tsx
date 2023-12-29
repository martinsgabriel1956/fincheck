import { ReactNode } from "react";
import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

export function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger
      className="outline-none"
      asChild
    >
      {children}
    </RdxDropdownMenu.Trigger>
  );
}