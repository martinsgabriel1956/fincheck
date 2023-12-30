import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/app/utils/cn";
import { Button, Modal } from "@/view/components";
import { useFiltersModal } from "./useFiltersModal";

interface FiltersModalProps {
  open: boolean
  onClose(): void
}

const mockedAccounts = [
  {
    id: "123",
    name: "Nubank"
  },
  {
    id: "456",
    name: "XP Investimentos"
  },
  {
    id: "789",
    name: "Dinheiro"
  },
];

export function FiltersModal({ onClose, open }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear
  } = useFiltersModal();

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Filtros"
    >
      <div className="">
        <span className="text-lg font-bold tracking-[-1px] text-gray-800">
          Conta
        </span>

        <div className="mt-2 space-y-2">
          {
            mockedAccounts.map((account) => (
              <button
                key={account.id}
                onClick={() => handleSelectBankAccount(account.id)}
                className={cn(
                  "w-full rounded-2xl  p-2 text-left text-gray-800 transition-colors hover:bg-gray-50",
                  account.id === selectedBankAccountId && "!bg-gray-200"
                )}
              >
                {account.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className="mt-10 text-gray-800">
        <span className="text-lg font-bold tracking-[-1px]">
          Ano
        </span>

        <div className="mt-2 flex w-52 items-center justify-between">
          <button
            className="flex h-12 w-12 items-center justify-center"
            onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon
              className="h-6 w-6"
            />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
          </div>
          <button
            className="flex h-12 w-12 items-center justify-center"
            onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <Button
        className="mt-10 w-full"
      >
        Aplicar Filtros
      </Button>
    </Modal>
  );
}
