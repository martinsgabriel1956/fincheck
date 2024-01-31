import { NumericFormat } from "react-number-format";
import { FormFieldError } from "..";
import { cn } from "@/app/utils/cn";

interface InputCurrencyProps {
  error?: string
  value?: string
  onChange?(value: string): void
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div className="">
      <NumericFormat
        className={cn(
          "w-full text-[32px] font-bold tracking-[-1px] text-gray-800 outline-none",
          error && "text-red-900"
        )}
        value={value}
        thousandSeparator="."
        decimalSeparator=","
        onChange={event => onChange?.(event.target.value)}
      />

      {error && (
        <FormFieldError
          error={error}
        />
      )}
    </div>
  );
}
