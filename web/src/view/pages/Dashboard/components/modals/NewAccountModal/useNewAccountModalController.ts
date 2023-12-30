import { useDashboard } from "../../../contexts/useDashboard";

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard();

  return {
    isNewAccountModalOpen,
    closeNewAccountModal
  };
}
