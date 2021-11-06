const StatisticsBtns = ({ handleOpenPage }) => {
  return (
    <>
      <button onClick={() => handleOpenPage("costs")} type="button">
        Все расходы
      </button>
      <button onClick={() => handleOpenPage("incomes")} type="button">
        Все доходы
      </button>
    </>
  );
};

export default StatisticsBtns;
