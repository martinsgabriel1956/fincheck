import { CrossCircledIcon } from "@radix-ui/react-icons";

interface FormFieldErrorProps {
  error?: string
}

export function FormFieldError({ error }: FormFieldErrorProps) {
  return (
    <div className="mt-2 flex items-center gap-2 text-red-900">
      <CrossCircledIcon />
      <span className="text-xs"> {error}</span>
    </div>
  );
}
