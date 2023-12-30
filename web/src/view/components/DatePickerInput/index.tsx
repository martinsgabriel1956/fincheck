import { cn } from "@/app/utils/cn";
import { DatePicker, FormFieldError, Popover } from "..";
import { useState } from "react";
import { formatDate } from "@/app/utils/formatDate";
// import { DatePicker } from "../DatePicker";

interface DatePickerInputProps {
  error?: string
  className?: string
}

export function DatePickerInput({ className, error }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="">
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              "h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-gray-700 outline-none transition-all focus:border-gray-800 text-left relative pt-4",
              error && "!border-red-900",
              className
            )}
          >
            <span className="pointer-events-none absolute left-[13px] top-2
          text-xs text-gray-700">Data</span>
            <span className="">{formatDate(selectedDate)}</span>
          </button >
        </Popover.Trigger>
        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={date => setSelectedDate(date)}
          />
        </Popover.Content>
      </Popover.Root>

      {error && (
        <FormFieldError
          error={error}
        />
      )}
    </div>
  );
}