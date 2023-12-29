import { ReactNode } from "react";
import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/app/utils/cn";

interface DropdownMenuItemProps {
  children: ReactNode;
  className?: string;
  onSelect?(): void
}
export function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "flex min-h-[40px] items-center rounded-2xl py-2 px-4 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-50 cursor-pointer", className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
