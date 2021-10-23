import { useState } from "react";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import shortid from "shortid";
import Form from "../_share/Form/Form";
import transFormOptions from "../../assets/options/transactionFormOptions.json";
import AppProvider, { useAppContext } from "../AppProvider/AppProvider";

const TransactionPage = ({ transType }) => {
  const { handleClosePage, addTransaction } = useAppContext();

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
        <Form
          cbOnSubmit={handleSubmit}
          handleChange={handleChange}
          formOpts={transFormOptions}
          formValues={form}
          btnTitle={"OK"}
        />
      </section>
    </AppProvider>
  );
};

export default TransactionPage;
