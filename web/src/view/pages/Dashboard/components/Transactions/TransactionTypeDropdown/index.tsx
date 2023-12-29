import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu, ExpensesIcon, IncomeIcon, TransactionsIcon } from "@/view/components";

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">Transações</span>
          <ChevronDownIcon className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="w-[279px]"
      >
        <DropdownMenu.Item
          className="gap-2"
        >
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="gap-2"
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="gap-2"
        >
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
