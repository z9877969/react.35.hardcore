import { useHistory } from "react-router-dom";

const GoBackHeader = ({ title }) => {
  const { push, location } = useHistory();

  const cbGoBack = () => push(location.state?.from || "/");

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
