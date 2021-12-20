import React from "react";
import {
  CardContainer,
  TransactionAmt,
  TransactionName,
} from "./TransactionCardStyles";

const TransactionCard = () => {
  return (
    <CardContainer borderColor="green">
      <TransactionName>Payroll</TransactionName>
      <TransactionAmt>$500</TransactionAmt>
    </CardContainer>
  );
};

export default TransactionCard;
