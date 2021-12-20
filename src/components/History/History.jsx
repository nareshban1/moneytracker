import React from "react";
import TransactionCard from "../Transaction/TransactionCard";
import { HistoryContainer, HistoryTitle } from "./HistoryStyles";

const History = () => {
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <TransactionCard />
      <TransactionCard />
    </HistoryContainer>
  );
};

export default History;
