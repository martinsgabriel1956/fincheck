import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
};

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = name ?? id;

  return (
    <div className="relative">
      <input
        {...props}
        id={inputId}
        className="w-full px-3 bg-white border border-gray-500 rounded-lg h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none"
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="text-gray-700 text-xs top-2 absolute left-[13px] pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}