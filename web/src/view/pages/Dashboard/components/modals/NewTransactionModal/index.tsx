import { useNewTransactionModalController } from "./useNewTransactionModalController";
import { Button, DatePickerInput, Input, InputCurrency, Modal, Select } from "@/view/components";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      title={`Nova ${isExpense ? "Despesa" : "Receita"}`}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form className="">
        <div className="">
          <span className="text-xs tracking-[-0.5px] text-gray-600">
            Valor da {isExpense ? "despesa" : "receita"}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={`Nome da ${isExpense ? "Despesa" : "Receita"}`}
          />

          <Select
            placeholder="Categoria"
            // error="Você precisa Selecionar uma fruta"
            options={[
              {
                value: "CHEKING",
                label: "Conta Corrente"
              },
              {
                value: "INVESTIMENT",
                label: "Investimentos"
              },
              {
                value: "CASH",
                label: "Dinheiro Físico"
              },
            ]}
          />

          <Select
            placeholder={`${isExpense ? "Pagar" : "Receber"} com`}
            // error="Você precisa Selecionar uma fruta"
            options={[
              {
                value: "CHEKING",
                label: "Conta Corrente"
              },
              {
                value: "INVESTIMENT",
                label: "Investimentos"
              },
              {
                value: "CASH",
                label: "Dinheiro Físico"
              },
            ]}
          />

          <DatePickerInput />
        </div>

        <Button
          type="submit"
          className="mt-6 w-full"
        >
          Criar
        </Button>
      </form>
    </Modal>
  );
}
