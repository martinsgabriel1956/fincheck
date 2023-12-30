import { cn } from "@/app/utils/cn";
import * as RdxDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean
  children: ReactNode
  title: string
  rightAction?: ReactNode
  onClose?(): void
}

export function Modal({ children, open, title, rightAction, onClose }: ModalProps) {
  return (
    <RdxDialog.Root
      open={open}
      onOpenChange={onClose}
    >
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            "data-[state=open]:animate-overlay-show"
          )}
        />
        <RdxDialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none",
            "data-[state=open]:animate-content-show"
          )}
        >
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              className="flex h-12 w-12 items-center justify-center outline-none"
              onClick={onClose}
            >
              <Cross2Icon
                className="h-6 w-6"
              />
            </button>
            <span className="text-lg font-bold tracking-[-1px]">{title}</span>
            <div className="flex h-12 w-12 items-center justify-center ">
              {rightAction}
            </div>
          </header>
          <div className="">
            {children}
          </div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
