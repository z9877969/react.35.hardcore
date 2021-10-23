import { useEffect, useState } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import { useAppContext } from "../AppProvider/AppProvider";

const App = () => {
  const { activePage, costs, incomes } = useAppContext();

  switch (activePage) {
    case "costs":
      return <TransactionPage transType={activePage} />;
    case "incomes":
      return <TransactionPage transType={activePage} />;
    case "costsHistory":
      return <TransactionsHistoryPage transactions={costs} />;
    case "incomesHistory":
      return <TransactionsHistoryPage transactions={incomes} />;
    case "balance":
      return <BalancePage />;
    default:
      return <MainPage />;
  }
};

export default App;
