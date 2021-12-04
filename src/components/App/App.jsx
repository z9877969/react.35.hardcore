import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import AuthPage from "../_pages/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelector";
import { logOut } from "../../redux/auth/authActions";
import { getCurUser } from "../../redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  // const getErrorStatus = (state) => +state.auth.error.slice(-3);
  const getErrorStatus = (state) => state.auth.error.status;
  const errorStatus = useSelector(getErrorStatus);
  useEffect(() => {
    isAuth && dispatch(getCurUser());
  }, []);
  useEffect(() => {
    errorStatus === 401 && dispatch(logOut());
  }, [errorStatus]);

  return isAuth ? (
    <>
      {isAuth && <button onClick={handleLogOut}>LogOut</button>}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={"/transaction/:transType"} component={TransactionPage} />
        <Route
          path={"/history/:transType"}
          component={TransactionsHistoryPage}
        />
        <Route path={"/balance"} component={BalancePage} />
        {/* <Route path="/defPage">
        <h1>defultPage</h1>
      </Route> */}
        <Redirect to="/" />
      </Switch>
    </>
  ) : (
    <Switch>
      <Route path="/auth/:authType" component={AuthPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default App;
