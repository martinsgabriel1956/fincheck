import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../DropdownMenu";
import { useAuth } from "@/app/hooks/useAuth";

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-0">
          <span className="text-sm font-medium tracking-[-0.5px] text-teal-900">GM</span>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-32"
      >
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={signout}
        >
          <span>Exit</span>
          <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
