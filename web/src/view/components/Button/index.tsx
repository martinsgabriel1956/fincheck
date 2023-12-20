import { ComponentProps } from "react";
import { cn } from "@/app/utils/cn";
import { Spinner } from "..";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "h-12 px-6 font-medium text-white transition-all bg-teal-900 hover:bg-teal-800 rounded-2xl disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        "flex items-center justify-center",
        className
      )}
    >

      {isLoading ? <Spinner className="h-6 w-6" /> : children}
    </button>
  );
}