import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDashboard } from "../../contexts/useDashboard";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { bankAccountService } from "@/app/services/bankAccountsService";

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const { data, isFetching } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: bankAccountService.getAll,
    staleTime: Infinity,
  });

  const currentBalance = useMemo(() => {
    if (!data) {
      return 0;
    }

    return data.reduce((total, account) => total + account.currentBalance, 0);
  }, [data]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: data ?? [],
    openNewAccountModal,
    currentBalance,
  };
}
