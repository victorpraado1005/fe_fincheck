import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Input } from "../../../../components/input";
import { Select } from "../../../../components/Select";
import { useEditAccountModal } from "./useNewAccountModalController";

import { Controller } from "react-hook-form";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    errors,
    handleSubmit,
    register,
    control,
    isPending
  } = useEditAccountModal();

  return (
    <Modal
      title="Editar Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>

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
            {...register('name')}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                error={errors.type?.message}
                value={value}
                onChange={onChange}
                options={[
                  {
                    value: 'INVESTMENT',
                    label: 'Investimentos'
                  },
                  {
                    value: 'CHECKING',
                    label: 'Conta Corrente'
                  },
                  {
                    value: 'CASH',
                    label: 'Dinheiro Físico'
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
                value={value}
                onChange={onChange}
                error={errors.color?.message}
              />
            )}
          />



        </div>

        <Button type="submit" className="w-full mt-6" isLoading={isPending} >
          Criar Conta
        </Button>
      </form>
    </Modal>
  )
}