import { Button, HeaderForm, Input } from "@/view/components";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <>
      <HeaderForm
        title="Entre em sua conta"
        text="Novo por aqui?"
        pathname="/register"
        linkText="Entre em sua conta"
      />
      <form
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4"
      >
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
          Entrar
        </Button>
      </form>
    </>
  );
}