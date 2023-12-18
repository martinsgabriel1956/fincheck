import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { authService } from "@/app/services/authService";
import { SignupParams } from "@/app/services/authService/signup";
import { useAuth } from "@/app/hooks/useAuth";

const registerFormSchema = zod.object({
  name: zod.string().nonempty("Nome é obrigatório"),
  email: zod.string().nonempty("E-mail é obrigatório").email("Informe um e-mail válido"),
  password: zod.string().nonempty("Senha é obrigatório").min(8, "Senha deve conter pelo menos 8 dígitos")
});

type FormData = zod.infer<typeof registerFormSchema>


export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return await authService.signup(data);
    }
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch (err) {
      toast.error("Ocorreu um erro ao criar sua conta");
    }
  });

  return { handleSubmit, register, errors, isPending };
}