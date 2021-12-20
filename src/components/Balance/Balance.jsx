import React from "react";
import { useTransactions } from "../../context/transactionContext";
import { BalanceAmount, BalanceContainer, Title } from "./BalanceStyles";

const Balance = () => {
  const { balance } = useTransactions();
  return (
    <BalanceContainer>
      <Title>Your Balance</Title>
      <BalanceAmount>${balance}</BalanceAmount>
    </BalanceContainer>
  );
};

export default Balance;
