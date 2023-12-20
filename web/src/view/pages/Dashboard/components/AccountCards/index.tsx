import { formatCurrency } from "@/app/utils/formatCurrency";
import { BankAccountTypeIcon } from "@/view/components/BankAccountTypeIcon";

interface AccountCardProps {
  color: string
  name: string
  balance: number
  type: "CASH" | "CHECKING" | "INVESTMENT"
}

export function AccountCards({ balance, color, name, type }: AccountCardProps) {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{
        borderColor: color
      }}
    >
      <header className="">
        <BankAccountTypeIcon
          type={type}
        />
        <span className="mt-4 inline-block font-medium tracking-[-0.5px] text-gray-800">{name}</span>
      </header>

      <div className="">
        <span className="block font-medium tracking-[-0.5px] text-gray-800">{formatCurrency(balance)}</span>
        <small
          className="text-sm text-gray-600"
        >
          Saldo atual
        </small>
      </div>
    </div>
  );
}
