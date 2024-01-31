import { formatCurrency } from "@/app/utils/formatCurrency";
import { BankAccountTypeIcon } from "@/view/components";
import { cn } from "@/app/utils/cn";
import { useDashboard } from "../../../contexts/useDashboard";
import { BankAccount } from "@/app/entities/bankAccount";

interface AccountCardProps {
  data: BankAccount
}

export function AccountCard({ data }: AccountCardProps) {
  const { currentBalance, color, name, type } = data;

  const {
    areValuesVisible,
    openEditAccountModal
  } = useDashboard();

  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{
        borderColor: color
      }}
      role="button"
      onClick={() => openEditAccountModal(data)}
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
          {formatCurrency(currentBalance)}
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
