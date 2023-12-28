import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface SliderNavigationProps {
  isBeginning: boolean
  isEnd: boolean
}

export function SliderNavigation({ isBeginning, isEnd }: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="">
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 text-white transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon
          className="h-6 w-6" />
      </button>
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 text-white transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon
          className="h-6 w-6" />
      </button>
    </div>
  );
}
