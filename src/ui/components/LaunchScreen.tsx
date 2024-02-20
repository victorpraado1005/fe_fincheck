import { Transition } from '@headlessui/react'
import logo from '../../assets/logo.svg'
import { Spinner } from './spinner'

interface LaunchScreenProps {
  isLoading: boolean
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-teal-900 fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className='flex flex-col items-center gap-4'>
          <img src={logo} alt="Logo" className='h-10' />
          <Spinner className='text-teal-900 fill-gray-500' />
        </div>
      </div>
    </Transition>

  )
}