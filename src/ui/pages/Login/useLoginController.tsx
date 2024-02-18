import { useForm } from "react-hook-form"
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().min(1, 'Senha é obrigatório').min(8, 'Senha deve conter pelo menos 8 dígitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>();

  const handleSubmit = hookFormHandleSubmit((data) => {
    const result = schema.safeParse(data);
    console.log(result);
  })

  return { handleSubmit, register }
}