import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { authService } from "@/app/services/authService";
import { SigninParams } from "@/app/services/authService/signin";
import { useAuth } from "@/app/hooks/useAuth";

const loginFormSchema = zod.object({
  email: zod.string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: zod.string()
    .nonempty("Senha é obrigatório")
    .min(8, "Senha deve conter pelo menos 8 digitos")
});

type FormDataType = zod.infer<typeof loginFormSchema>

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(loginFormSchema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return await authService.signin(data);
    }
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch (err) {
      toast.error("Credenciais invalidas");
    }
  });

  return { handleSubmit, register, errors, isPending };
}