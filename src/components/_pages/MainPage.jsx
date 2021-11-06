import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/data/mainInfoOptions.json";

const MainPage = ({ history, location }) => {
  const openTransactionPage = (transType) => {
    const nextLocation = {
      pathname: "/transaction/" + transType,
      state: { string: "prevLocation", from: location },
    };
    history.push(nextLocation); // costs || incomes
  };

  const openTransactionHistoryPage = (transType) =>
    history.push(`/history/${transType}`); // costs || incomes

  const openBalancePage = () => history.push("/balance");
  // /history/:transType

  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        title={"Расходы"}
        options={mainInfoCosts}
        activePage="costs"
        handleOpenPage={openTransactionPage}
      />
      <MainInfo
        title={"Доходы"}
        options={mainInfoIncomes}
        activePage="incomes"
        handleOpenPage={openTransactionPage}
      />
      <MainInfo
        title={"Баланс"}
        options={mainInfoBalance}
        activePage="balance"
        handleOpenPage={openBalancePage}
      />
      <StatisticsBtns handleOpenPage={openTransactionHistoryPage} />
    </section>
  );
};

export default MainPage;
