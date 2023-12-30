import { createContext } from "react";

export type Transaction = "INCOME" | "EXPENSE"

interface DashboardContextValue {
  areValuesVisible: boolean
  isNewAccountModalOpen: boolean
  isNewTransactionModalOpen: boolean
  newTransactionType: Transaction | null
  toggleValuesVisibility(): void
  openNewAccountModal(): void
  closeNewAccountModal(): void
  openNewTransactionModal(type: Transaction): void
  closeNewTransactionModal(): void
}

export const DashboardContext = createContext({} as DashboardContextValue);