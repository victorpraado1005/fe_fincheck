import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";
import { cn } from "../../../../../app/utils/cn";
import { Spinner } from "../../../../components/spinner";
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { TransactionTypeDropDown } from "./TransactionTypeDropDown";
import { FiltersModal } from "./FiltersModal";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoadign,
    isLoading,
    transactions,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    isFiltersModalOpen
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl h-full w-full md:p-10 px-4 py-8 flex flex-col">


      {isInitialLoadign && (
        <div className='w-full h-full flex items-center justify-center'>
          <Spinner className='size-10' />
        </div>
      )}

      {!isInitialLoadign && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />
          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropDown />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper
                slidesPerView={3}
                centeredSlides
              >
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption index={index} isActive={isActive} month={month} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner className='size-10' />
              </div>
            )}

            {(!hasTransactions && !isLoading) && (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={emptyStateImage} alt="Empty State" />
                <span className="text-gray-700">Não encontramos nenhuma transação</span>
              </div>
            )}

            {(hasTransactions && !isLoading) && (
              <>
                <div className="rounded-2xl bg-white p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="expense" />
                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        Almoço
                      </strong>
                      <span className="text-sm text-gray-600">
                        04/06/2023
                      </span>
                    </div>
                  </div>
                  <span className={cn(
                    "font-medium text-red-800 tracking-[-0.5px]",
                    !areValuesVisible && 'blur-sm'
                  )}>
                    {formatCurrency(-123)}
                  </span>
                </div>

                <div className="rounded-2xl bg-white p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="income" />
                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        Almoço
                      </strong>
                      <span className="text-sm text-gray-600">
                        04/06/2023
                      </span>
                    </div>
                  </div>
                  <span className={cn(
                    "font-medium text-green-800 tracking-[-0.5px]",
                    !areValuesVisible && 'blur-sm'
                  )}>
                    {formatCurrency(-123)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}