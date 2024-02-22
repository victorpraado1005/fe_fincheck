import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl h-full w-full md:p-10 px-4 py-8">
      <header className="">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-900 tracking-[-0.5px] font-medium">Transações</span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6">
          <Swiper
            slidesPerView={3}
            centeredSlides
          >
            {MONTHS.map(month => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <button className={cn("w-full rounded-full h-12 text-sm tracking-[-0.5px] font-medium text-gray-800",
                    isActive && 'bg-white')}
                  >
                    {month}
                  </button>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4">
        conteudo
      </div>
    </div>
  )
}