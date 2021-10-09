import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

class App extends Component {
  state = {
    activePage: "",
    costs: [],
    incomes: [],
  };

  handleOpenPage = (activePage) => {
    this.setState({ activePage });
  };

  handleClosePage = () => this.setState({ activePage: "" });

  addTransaction = ({ transType, transaction }) => {
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
  };

  render() {
    const { activePage } = this.state;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            transType={activePage}
            handleClosePage={this.handleClosePage}
            addTransaction={this.addTransaction}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            transType={activePage}
            handleClosePage={this.handleClosePage}
            addTransaction={this.addTransaction}
          />
        );
      case "balance":
        return <BalancePage />;
      default:
        return <MainPage handleOpenPage={this.handleOpenPage} />;
    }
  }
}

export default App;
