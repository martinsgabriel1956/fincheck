import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setIsSelectedBankAccountId] = useState<null | string>(null);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  function handleSelectBankAccount(bankAccountId: string) {
    setIsSelectedBankAccountId(prevState => prevState === bankAccountId ? null : bankAccountId);
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear
  };
}