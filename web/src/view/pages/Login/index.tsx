import { useForm } from "react-hook-form";
import { Button, HeaderForm, Input } from "../../components";

export function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <HeaderForm
        title="Entre em sua conta"
        text="Novo por aqui?"
        pathname="/register"
        linkText="Entre em sua conta"
      />
      <form
        onSubmit={handleSubmit(onSubmit, (error) => console.log({ error }))}
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
        />

        <Button
          type="submit"
          className="mt-2"
        >
          Entrar
        </Button>
      </form>
    </>
  )
}