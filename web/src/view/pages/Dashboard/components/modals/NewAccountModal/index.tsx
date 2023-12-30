import { useNewAccountModalController } from "./useNewAccountModalController";
import { Button, ColorsDropdownInput, Input, InputCurrency, Modal, Select } from "@/view/components";

export function NewAccountModal() {
  const {
    closeNewAccountModal,
    isNewAccountModalOpen
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form className="">
        <div className="">
          <span className="text-xs tracking-[-0.5px] text-gray-600">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome da Conta"
          />

          <Select
            placeholder="Tipo"
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

          <ColorsDropdownInput />
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
