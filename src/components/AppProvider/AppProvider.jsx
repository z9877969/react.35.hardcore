import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

console.log("AppContext :>> ", AppContext);

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleOpenPage = (activePage) => setActivePage(activePage);

  const handleClosePage = () => setActivePage("");

  const addTransaction = ({ transType, transaction }) => {
    transType === "costs" &&
      setCosts((prevCosts) => [...prevCosts, transaction]);
    transType === "incomes" &&
      setIncomes((prevIncomes) => [...prevIncomes, transaction]);
    console.log("transtype :>> ", transType);
  };

  useEffect(() => {
    const parsedCosts = JSON.parse(localStorage.getItem("costs"));
    const parsedIncomes = JSON.parse(localStorage.getItem("incomes"));
    parsedCosts && setCosts(parsedCosts);
    parsedIncomes && setIncomes(parsedIncomes);
  }, []);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  return (
    <AppContext.Provider
      value={{
        activePage,
        costs,
        incomes,
        handleOpenPage,
        handleClosePage,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
