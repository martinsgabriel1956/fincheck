import { formatCurrency } from "@/app/utils/formatCurrency";
import { BankAccountTypeIcon } from "@/view/components";
import { useAccountsController } from "../useAccountsController";
import { cn } from "@/app/utils/cn";

interface AccountCardProps {
  color: string
  name: string
  balance: number
  type: "CASH" | "CHECKING" | "INVESTMENT"
}

export function AccountCards({ balance, color, name, type }: AccountCardProps) {
  const {
    areValuesVisible,
  } = useAccountsController();

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
        <span
          className={cn(
            "block font-medium tracking-[-0.5px] text-gray-800",
            !areValuesVisible && "blur-sm"
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small
          className="text-sm text-gray-600"
        >
          Saldo atual
        </small>
      </div>
    </div>
  );
}
