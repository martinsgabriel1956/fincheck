import { ReactNode } from "react";
import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/app/utils/cn";

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}
export function DropdownMenuContent({ children, className }: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "space-y-2 rounded-2xl bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-50",
          "data-[side=bottom]:animate-slide-up-and-fade",
          "data-[side=top]:animate-slide-down-and-fade",
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}
