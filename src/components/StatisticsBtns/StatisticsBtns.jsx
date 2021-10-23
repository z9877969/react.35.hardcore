const StatisticsBtns = ({ handleOpenPage }) => {
  return (
    <>
      <button onClick={() => handleOpenPage("costsHistory")} type="button">
        Все расходы
      </button>
      <button onClick={() => handleOpenPage("incomesHistory")} type="button">
        Все доходы
      </button>
    </>
  );
};

export default StatisticsBtns;
