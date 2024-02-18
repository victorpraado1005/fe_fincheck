import { ComponentProps } from "react";

import { cn } from "../../app/utils/cn";
import { Spinner } from "./spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "bg-teal-900 hover:bg-teal-800 transition-all disabled:bg-gray-100 px-6 h-12 rounded-2xl text-white font-medium disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center",
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="size-6" />}
    </button>
  )
}