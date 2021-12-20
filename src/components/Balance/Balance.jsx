import React from "react";
import { BalanceAmount, BalanceContainer, Title } from "./BalanceStyles";

const Balance = () => {
  return (
    <BalanceContainer>
      <Title>Your Balance</Title>
      <BalanceAmount>$500</BalanceAmount>
    </BalanceContainer>
  );
};

export default Balance;
