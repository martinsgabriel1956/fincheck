import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  console.log(swiper);

  return (
    <div className="">
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 text-white transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        // disabled
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon
          className="h-6 w-6" />
      </button>
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 text-white transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        // disabled
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon
          className="h-6 w-6" />
      </button>
    </div>
  );
}
