import { useState } from "react";
import * as RdxSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/app/utils/cn";
import { SelectItem } from "./SelectItem";
import { FormFieldError } from "../FormFieldError";

interface SelectProps {
  className?: string
  error?: string
  placeholder?: string
  options: {
    value: string;
    label: string;
  }[]
  value?: string
  onChange?(value: string): void
}

export function Select({ className, error, placeholder, options, onChange, value }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? "");

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div className="">
      <div className="relative">
        <label
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-700",
            selectedValue && "text-xs left-[13px] top-2 transition-all translate-y-0"
          )}
        >
          {placeholder}
        </label>
        <RdxSelect.Root
          onValueChange={handleSelect}
          value={value}
        >
          <RdxSelect.Trigger
            className={cn(
              "h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-gray-800 outline-none transition-all focus:border-gray-800 text-left relative pt-4",
              error && "!border-red-900",
              className
            )}
          >
            <RdxSelect.Value />
            <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon
                className="h-6 w-6 text-gray-800"
              />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>
          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[99] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
              <RdxSelect.ScrollUpButton
                className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800"
              >
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>
              <RdxSelect.Viewport className="p-2">
                {options.map(option => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </RdxSelect.Viewport>
              <RdxSelect.ScrollDownButton
                className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800"
              >
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && (
        <FormFieldError
          error={error}
        />
      )}
    </div>
  );
}


