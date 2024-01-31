import { z as zod } from "zod";
import { useDashboard } from "../../../contexts/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bankAccountService } from "@/app/services/bankAccountsService";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";
import toast from "react-hot-toast";

const bankAccountFormSchema = zod.object({
  initialBalance: zod.string().nonempty("Saldo inicial é obrigatório"),
  name: zod.string().nonempty("Nome da conta é obrigatório"),
  type: zod.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: zod.string().nonempty("Cor é obrigatória"),
});

type FormDataType = zod.infer<typeof bankAccountFormSchema>;

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal } = useDashboard();

  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(bankAccountFormSchema),
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: bankAccountService.create,
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });
      toast.success("Conta cadastrada com sucesso");
      closeEditAccountModal();
      reset();
    } catch (err) {
      toast.error("Erro ao cadastrar a conta");
    }
  });

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isPending,
  };
}
