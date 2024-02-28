import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropDownMenu";
import { Expense } from "../../../../components/icons/categories/expense/Expense";
import { Income } from "../../../../components/icons/categories/income/Income";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className="bg-teal-900 size-12 rounded-full flex items-center justify-center text-white"
          >
            <PlusIcon className="size-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item className="gap-2">
            <Expense />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <Income />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}