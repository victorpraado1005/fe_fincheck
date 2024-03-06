import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";

const schema = z.object({
  initialBalance: z.string().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(['INVESTMENT', 'CHECKING', 'CASH']),
  color: z.string().min(1, 'Nome da conta é obrigatório')
});

type FormData = z.infer<typeof schema>

export function useEditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const queryClient = useQueryClient();
  const {
    isPending,
    mutateAsync
  } = useMutation({
    mutationFn: bankAccountsService.create
  })


  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({ 
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
       });

       queryClient.invalidateQueries({ queryKey: ['bankAccounts'] })
       toast.success('Conta cadastrada com sucesso!');
       closeEditAccountModal();
       reset();
    } catch {
      toast.error('Erro ao cadastrar a conta.')
    }
  })

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isPending
  } 
}