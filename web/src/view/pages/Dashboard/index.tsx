import { Accounts, Logo, Transactions } from "@/view/components";
import { UserMenu } from "@/view/components/UserMenu";
import { DashboardProvider } from "./contexts/DashboardProvider";
import { Fab } from "./components/Fab";
import { NewAccountModal, NewTransactionModal } from "./components/modals";
import { EditAccountModal } from "./components/modals/EditAccountModal";

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex h-full w-full flex-col gap-4 p-4 md:p-8 md:pt-6">
        <header
          className="flex h-12 items-center justify-between"
        >
          <Logo
            className="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main
          className="flex max-h-full flex-1 flex-col gap-4 md:flex-row"
        >
          <section
            className="w-full md:w-1/2"
          >
            <Accounts />
          </section>
          <section
            className="w-full md:w-1/2"
          >
            <Transactions />
          </section>
        </main>
        <Fab />
        <NewAccountModal />
        <EditAccountModal />
        <NewTransactionModal />
      </div>
    </DashboardProvider>
  );
}


