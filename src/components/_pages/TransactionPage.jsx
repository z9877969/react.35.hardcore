import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import shortid from "shortid";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Form from "../_share/Form/Form";
import CategoriesList from "../CategoriesList/CategoriesList";
import transFormOptions from "../../assets/options/transactionFormOptions.json";
import AppProvider, { useAppContext } from "../AppProvider/AppProvider";

const TransactionPage = ({ match, history }) => {
  const { handleClosePage, addTransaction } = useAppContext();
  const {
    params: { transType },
    path,
    url,
  } = match;

  const [form, setForm] = useState({
    date: "",
    time: "",
    category: "Еда",
    sum: "",
    currency: "USD",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const openCatList = () => {
    const { push, location } = history;
    push({
      pathname: `${url}/cat-list`,
      state: {
        from: location.state?.from || "/",
      },
    });
  };

  const handleSubmit = () => {
    addTransaction({
      transType,
      transaction: { ...form, id: shortid.generate() },
    });
    handleClosePage();
  };

  return (
    <AppProvider>
      <section>
        <GoBackHeader
          title={transType === "costs" ? "Расход" : "Доходы"}
          cbGoBack={handleClosePage}
        />
        <Switch>
          <Route path={path + "/cat-list"}>
            <CategoriesList />
          </Route>
          <Route>
            <Form
              cbOnSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={openCatList}
              formOpts={transFormOptions}
              formValues={form}
              btnTitle={"OK"}
            />
          </Route>
        </Switch>
      </section>
    </AppProvider>
  );
};

export default TransactionPage;
