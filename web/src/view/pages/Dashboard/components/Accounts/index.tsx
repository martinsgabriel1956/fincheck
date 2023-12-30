import { SwiperSlide, Swiper } from "swiper/react";
import { EyeIcon } from "@/view/components/icons/EyeIcon";
import { AccountCards } from "./AccountCards";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import "swiper/css";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { cn } from "@/app/utils/cn";
import { Spinner } from "@/view/components";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
    openNewAccountModal
  } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10 fill-white text-teal-950/50" />
        </div>
      )}

      {!isLoading && (
        <>
          <div className=" text-white">
            <span className="block tracking-[-0.5px]">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px]",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                className="flex h-8 w-8 items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
            {accounts.length === 0 && (
              <>
                <div
                  className="mb-4"
                >
                  <strong className="text-lg tracking-[-1px] text-white">Minhas contas</strong>
                </div>

                <button
                  className="flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white"
                  onClick={openNewAccountModal}
                >
                  <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>
                  <span className="block w-32 text-center font-medium tracking-[-0.5px]">Cadastre uma nova conta</span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                  onSlideChange={swiper => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd
                    });
                  }}
                >
                  <div
                    className="mb-4 flex items-center justify-between"
                    slot="container-start"
                  >
                    <strong className="text-lg tracking-[-1px] text-white">Minhas contas</strong>
                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  <SwiperSlide>
                    <AccountCards
                      balance={1000.23}
                      name="Nubank"
                      color="#7950f2"
                      type="CASH"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <AccountCards
                      balance={1000.23}
                      name="XP"
                      color="#333"
                      type="INVESTMENT"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <AccountCards
                      balance={1000.23}
                      name="Carteira"
                      color="#0F0"
                      type="CHECKING"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}


