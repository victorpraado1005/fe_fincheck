import { useState } from "react";

export function useFiltersModal() {
  const [selectedBanckAccountId, setSelectedBanckAccountId] = useState<null | string>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBanckAccountId(prevState => prevState === bankAccountId ? null : bankAccountId);
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step)
  }

  return {
    handleSelectBankAccount, 
    selectedBanckAccountId,
    selectedYear,
    handleChangeYear
  }
}