import { ReactNode, useCallback, useState } from "react";
import { DashboardContext, Transaction } from ".";
import { BankAccount } from "@/app/entities/bankAccount";

export function DashboardProvider({ children }: { children: ReactNode; }) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransactionType] = useState<Transaction | null>(null);
  const [accountBeingEdited, setAccountBeingEdited] = useState<BankAccount | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);
  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: Transaction) => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);
  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdited(bankAccount)
  }, []);
  const closeEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
    setAccountBeingEdited(null)
  }, []);

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
      isNewAccountModalOpen,
      openNewAccountModal,
      closeNewAccountModal,
      isNewTransactionModalOpen,
      openNewTransactionModal,
      closeNewTransactionModal,
      newTransactionType,
      openEditAccountModal,
      closeEditAccountModal,
      isEditAccountModalOpen,
      accountBeingEdited
    }}>
      {children}
    </DashboardContext.Provider>
  );
}
