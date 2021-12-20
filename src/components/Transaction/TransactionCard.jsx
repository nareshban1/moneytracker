import React from "react";
import {
  CardContainer,
  TransactionAmt,
  TransactionName,
} from "./TransactionCardStyles";

const TransactionCard = ({ transactionName, amount }) => {
  return (
    <CardContainer borderColor={Math.sign(amount) === 1 ? "green" : "red"}>
      <TransactionName>{transactionName}</TransactionName>
      <TransactionAmt>
        ${Math.sign(amount) === 1 ? amount : amount.substring(1)}
      </TransactionAmt>
    </CardContainer>
  );
};

export default TransactionCard;
