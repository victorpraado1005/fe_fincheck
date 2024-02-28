import { ExitIcon } from "@radix-ui/react-icons"
import { DropdownMenu } from "./DropDownMenu"
import { useAuth } from "../../app/hooks/useAuth"

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-teal-50 rounded-full size-12 flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[0.5px] text-teal-900 font-medium">VP</span>
        </div>
      </DropdownMenu.Trigger>


      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={signout}
        >
          <span>Sair</span>
          <ExitIcon className="size-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>

    </DropdownMenu.Root>
  )
}