import { Controller } from "react-hook-form";
import { useEditAccountModalController } from "./useEditAccountModalController";
import { Button, ColorsDropdownInput, Input, InputCurrency, Modal, Select } from "@/view/components";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    errors,
    register,
    handleSubmit,
    control,
    isPending,
  } = useEditAccountModalController();

  return (
    <Modal
      title="Editar Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
    >
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="">
          <span className="text-xs tracking-[-0.5px] text-gray-600">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da Conta"
            error={errors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                error={errors.type?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: "CHECKING",
                    label: "Conta Corrente"
                  },
                  {
                    value: "INVESTMENT",
                    label: "Investimentos"
                  },
                  {
                    value: "CASH",
                    label: "Dinheiro Físico"
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />


        </div>

        <Button
          type="submit"
          className="mt-6 w-full"
          isLoading={isPending}
        >
          Criar
        </Button>
      </form>
    </Modal>
  );
}
