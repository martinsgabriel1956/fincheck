import { BankAccountIcon, DropdownMenu } from "@/view/components";
import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";
import { PlusIcon } from "@radix-ui/react-icons";

export function Fab() {
  return (
    <div className="fixed bottom-4 right-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-white">
            <PlusIcon
              className="h-6 w-6"
            />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            className="gap-2"
          >
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="gap-2"
          >
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="gap-2"
          >
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}