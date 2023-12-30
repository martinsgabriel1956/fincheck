import { ComponentProps, forwardRef } from "react";
import { cn } from "@/app/utils/cn";
import { FormFieldError } from "../FormFieldError";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, error, className, ...props }, ref) => {
  const inputId = name ?? id;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        ref={ref}
        autoComplete="on"
        className={cn(
          "peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-gray-800",
          error && "!border-red-900",
          className
        )}
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
      >
        {placeholder}
      </label>

      {error && (
        <FormFieldError
          error={error}
        />
      )}
    </div>
  );
});