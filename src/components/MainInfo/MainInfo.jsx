const MainInfo = ({
  title,
  currency = "USD",
  options,
  handleOpenPage,
  activePage,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{currency}</p>
      <ul>
        {options.map(({ namePeriod, titlePeriod, sum }) => (
          <li key={namePeriod}>
            <span>{titlePeriod}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => handleOpenPage(activePage)} type="button">
        Add
      </button>
    </section>
  );
};

export default MainInfo;
