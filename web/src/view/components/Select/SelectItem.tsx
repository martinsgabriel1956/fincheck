import * as RdxSelect from "@radix-ui/react-select";
import { cn } from "@/app/utils/cn";

interface SelectItemProps {
  className?: string
  value: string
  label: string
}

export function SelectItem({ label, className, value }: SelectItemProps) {
  return (
    <RdxSelect.Item
      className={cn(
        "p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-50 rounded-lg transition-colors",
        className
      )}
      value={value}
    >
      <RdxSelect.ItemText>{label}</RdxSelect.ItemText>
    </RdxSelect.Item>
  );
}

