import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import { useAppContext } from "../AppProvider/AppProvider";

const App = () => {

  return (
    <>
      {/* <Route path="/">
        <MainPage costs={costs} />
        </Route>
        <Route
        path="/"
        render={(routerProps) => <MainPage costs={costs} {...routerProps} />}
      /> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={"/transaction/:transType"} component={TransactionPage} />
        <Route
          path={"/history/:transType"}
          component={TransactionsHistoryPage}
        />
        <Route path={"/balance"} component={BalancePage} />
        <Route path="/defPage">
          <h1>defultPage</h1>
        </Route>
        <Redirect to="/defPage" />
      </Switch>
    </>
  );
};

// match || location || history

export default App;

// switch (activePage) {
//   case "costs":
//     return <TransactionPage transType={activePage} />;
//   case "incomes":
//     return <TransactionPage transType={activePage} />;
//   case "costsHistory":
//     return <TransactionsHistoryPage transactions={costs} />;
//   case "incomesHistory":
//     return <TransactionsHistoryPage transactions={incomes} />;
//   case "balance":
//     return <BalancePage />;
//   default:
//     return <MainPage />;
// }
