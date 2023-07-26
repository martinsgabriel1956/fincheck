import { useForm } from "react-hook-form";
import { Button, HeaderForm, Input } from "../../components";

export function Register() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <HeaderForm
        title="Crie uma conta"
        text="Já possui uma conta?"
        pathname="/login"
        linkText="Fazer Login"
      />

      <form
        onSubmit={handleSubmit(onSubmit, (error) => console.log({ error }))}
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Nome"
          {...register("name")}
        />
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
          Criar conta
        </Button>
      </form>
    </>
  )
}