import { cn } from "@/app/utils/cn";
import { ColorIcon, DropdownMenu, FormFieldError } from "..";
import { colors, Color } from "./utils/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface ColorsDropdownInputProps {
  error?: string
  className?: string
  value?: string
  onChange?(value: string): void
}

export function ColorsDropdownInput({ className, error, onChange, value }: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(() => {
    if (!value) {
      return null
    }

    return colors.find((color) => color.color === value) ?? null;
  });

  function handleSelect(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color)
  }

  return (
    <div className="">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
        >
          <button
            className={cn(
              "h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-gray-700 outline-none transition-all focus:border-gray-800 text-left relative",
              error && "!border-red-900",
              className
            )}
          >
            Color

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800">
              {!selectedColor && (
                <ChevronDownIcon
                  className="h-6 w-6 text-gray-800"
                />
              )}

              {selectedColor && (
                <ColorIcon
                  color={selectedColor.color}
                  bg={selectedColor.bg}
                />
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="grid grid-cols-4"
        >
          {colors.map(color => (
            <DropdownMenu.Item
              key={color.color}
              onSelect={() => handleSelect(color)}
            >
              <ColorIcon

                bg={color.bg}
                color={color.color}
              />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && (
        <FormFieldError
          error={error}
        />
      )}
    </div>
  );
}