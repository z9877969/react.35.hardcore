import { useAppContext } from "../AppProvider/AppProvider";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";

const TransactionsHistoryPage = ({ transactions = [] }) => {
  const { handleClosePage } = useAppContext();
  const allSum = transactions.reduce((acc, { sum }) => acc + Number(sum), 0);

  return (
    <section>
      <GoBackHeader title={"GoBack"} cbGoBack={handleClosePage} />
      <button name="prev">Prev</button>
      <LabelInput type="date" title="октябрь 2021" />
      <button name="next">Next</button>
      <table>
        <thead>
          <tr>
            <th>Всего:</th>
            <th>{allSum}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ category, sum, id }) => (
            <tr key={id}>
              <th>{category}</th>
              <th>{sum}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionsHistoryPage;

// Date(2021, 9, 23)
