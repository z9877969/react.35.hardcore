const GoBackHeader = ({ title, cbGoBack }) => {
  return (
    <header>
      <button type="button" onClick={cbGoBack}>
        GoBack
      </button>
      <h1>{title}</h1>
    </header>
  );
};

export default GoBackHeader;
