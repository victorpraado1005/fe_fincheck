import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../app/utils/cn';

function DropDownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  )
}

function DropDownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger className='outline-none' asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

interface DropDownMenuContentProps {
  children: React.ReactNode,
  className?: string,

}

function DropDownMenuContent({ children, className }: DropDownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-50',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

interface DropDownMenuItemProps {
  children: React.ReactNode,
  className?: string,
  onSelect?(): void
}

function DropDownMenuItem({ children, className, onSelect }: DropDownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'min-h-[40px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropDownMenuRoot,
  Trigger: DropDownMenuTrigger,
  Content: DropDownMenuContent,
  Item: DropDownMenuItem
};