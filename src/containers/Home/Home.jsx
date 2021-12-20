import React from "react";
import History from "../../components/History/History";
import IncomeExpense from "../../components/IncomeExpense/IncomeExpense";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import Balance from "../../components/Balance/Balance";
import { useAuth } from "../../context/authContext";
import Signin from "../../components/Authentication/Signin";
import UserInfo from "../../components/UserInfo/UserInfo";
const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser ? (
        <>
          <UserInfo />
          <Balance />
          <IncomeExpense />
          <History />
          <TransactionForm />
        </>
      ) : (
        <Signin />
      )}
    </>
  );
};

export default Home;
