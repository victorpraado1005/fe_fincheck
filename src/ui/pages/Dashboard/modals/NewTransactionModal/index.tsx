import { Button } from "../../../../components/Button";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Input } from "../../../../components/input";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModal.ts";
import { DatePickerInput } from "../../../../components/DatePickerIpunt.tsx";

export function NewTransactionModal() {
  const { closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE'

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5] text-xs">
            Valor {isExpense ? 'da Despesa' : 'da Receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />

          <Select
            placeholder="Categoria"
            // error="Selecione o tipo"
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

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            // error="Selecione o tipo"
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

          <DatePickerInput />
        </div>


        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  )
}