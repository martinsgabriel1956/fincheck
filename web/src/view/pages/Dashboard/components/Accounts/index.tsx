import { SwiperSlide, Swiper } from "swiper/react";
import { EyeIcon } from "@/view/components/icons/EyeIcon";
import { AccountCards } from "../AccountCards";
import "swiper/css";
import { AccountsSliderNavigation } from "../AccountsSliderNavigation";

export function Accounts() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div className=" text-white">
        <span className="block tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px]">R$ 1000,00</strong>
          <button className="flex h-8 w-8 items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
          >
            <div
              className="mb-4 flex items-center justify-between"
              slot="container-start"
            >
              <strong className="text-lg tracking-[-1px] text-white">Minhas contas</strong>
              <AccountsSliderNavigation />
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
      </div>
    </div>
  );
}


