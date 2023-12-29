import { Swiper, SwiperSlide } from "swiper/react";
import { FilterIcon, Spinner } from "@/view/components";
import { MONTHS } from "@/app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { cn } from "@/app/utils/cn";
import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";
import emptyStateImage from "@/assets/img/empty-state.svg";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersModal } from "./FiltersModal";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    transactions,
    isLoading,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  } = useTransactionsController();
  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      {isInitialLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />
          <header className="">
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button
                className=""
                onClick={handleOpenFiltersModal}
              >
                <FilterIcon />
              </button>
            </div>

            <div className="relative mt-6">
              <Swiper
                slidesPerView={3}
                centeredSlides
              >
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        isActive={isActive}
                        month={month}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="flex h-full flex-col items-center justify-center">
                <Spinner className="h-10 w-10" />
              </div>
            )}

            {(!hasTransactions && !isLoading) && (
              <div className="flex h-full flex-col items-center justify-center">
                <img src={emptyStateImage} alt="Empty State" />
                <p className="text-gray-700">Não encontramos nenhuma transação</p>
              </div>
            )}
            {(hasTransactions && !isLoading) && (
              <>
                <div
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4"
                >
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon
                      type="expense"
                    />

                    <div className="">
                      <strong className="block font-bold tracking-[-0.5px]">Almoço</strong>
                      <span className="text-sm text-gray-600">23/12/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-red-800",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    - {formatCurrency(132)}
                  </span>
                </div>
                <div
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4"
                >
                  <div className="flex flex-1 items-center gap-3">
                    <CategoryIcon
                      type="income"
                    />

                    <div className="">
                      <strong className="block font-bold tracking-[-0.5px]">Almoço</strong>
                      <span className="text-sm text-gray-600">23/12/2023</span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-green-800",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(132)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}


