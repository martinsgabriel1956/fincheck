import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> { }

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="h-12 px-6 font-medium text-white transition-all bg-teal-900 hover:bg-teal-800 rounded-2xl disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
    />
  );
}