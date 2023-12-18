import { Transition } from "@headlessui/react";
import { Logo } from "..";
import { Spinner } from "../Spinner";

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
      <div className="fixed left-0 top-0 grid h-full w-full place-items-center bg-teal-900">
        <div
          className="flex flex-col items-center gap-4"
        >
          <Logo
            className="h-10 text-white"
          />
          <Spinner
            className="fill-white text-teal-900"
          />
        </div>
      </div>
    </Transition>
  );
}