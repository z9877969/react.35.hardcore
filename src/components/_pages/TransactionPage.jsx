import { Component } from "react";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";
import shortid from "shortid";

class TransactionPage extends Component {
  state = {
    date: "",
    time: "",
    category: "Еда",
    sum: "",
    currency: "USD",
    comment: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { transType, addTransaction, handleClosePage } = this.props;
    addTransaction({
      transType,
      transaction: { ...this.state, id: shortid.generate() },
    });
    handleClosePage();
  };

  render() {
    const { date, time, currency, category, sum, comment } = this.state;
    const { handleClosePage, transType } = this.props;
    return (
      <section>
        <GoBackHeader
          title={transType === "costs" ? "Расход" : "Доходы"}
          cbGoBack={handleClosePage}
        />
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Ok</button>
          <LabelInput
            type="date"
            title="День"
            name="date"
            value={date}
            cbOnChange={this.handleChange}
          />
          <LabelInput
            type="time"
            title="Время"
            name="time"
            value={time}
            cbOnChange={this.handleChange}
          />
          <LabelInput
            type="button"
            title="Категория"
            name="category"
            value={category}
            // cbOnChange={() => {}}
          />
          <LabelInput
            title="Сумма"
            name="sum"
            value={sum}
            placeholder="Введите сумму"
            cbOnChange={this.handleChange}
          />
          <LabelInput
            type="button"
            title="Валюта"
            name="currency"
            value={currency}
            // cbOnChange={() => {}}
          />
          <LabelInput
            name="comment"
            value={comment}
            placeholder="Комментарий"
            cbOnChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default TransactionPage;
