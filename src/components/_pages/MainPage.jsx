import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/data/mainInfoOptions.json";
import { useAppContext } from "../AppProvider/AppProvider";

const MainPage = () => {
  const { handleOpenPage } = useAppContext();
  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        title={"Расходы"}
        options={mainInfoCosts}
        activePage="costs"
        handleOpenPage={handleOpenPage}
      />
      <MainInfo
        title={"Доходы"}
        options={mainInfoIncomes}
        activePage="incomes"
        handleOpenPage={handleOpenPage}
      />
      <MainInfo
        title={"Баланс"}
        options={mainInfoBalance}
        activePage="balance"
        handleOpenPage={handleOpenPage}
      />
      <StatisticsBtns handleOpenPage={handleOpenPage} />
    </section>
  );
};

export default MainPage;
