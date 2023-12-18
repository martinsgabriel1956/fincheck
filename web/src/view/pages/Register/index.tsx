import { Button, HeaderForm, Input } from "@/view/components";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { register, handleSubmit, errors, isPending } = useRegisterController();

  return (
    <>
      <HeaderForm
        title="Crie uma conta"
        text="Já possui uma conta?"
        pathname="/login"
        linkText="Fazer Login"
      />

      <form
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          className="mt-2"
          isLoading={isPending}
        >
          Criar conta
        </Button>
      </form>
    </>
  );
}