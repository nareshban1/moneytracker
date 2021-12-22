import React from "react";
import { useTransactions } from "../../context/transactionContext";
import TransactionCard from "../Transaction/TransactionCard";
import { HistoryContainer, HistoryTitle } from "./HistoryStyles";

const History = () => {
  const { transactions, loading } = useTransactions();

  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      {loading ? (
        <>loading</>
      ) : (
        <>
          {transactions?.map(({ id, transaction }) => (
            <TransactionCard
              key={id}
              transactionID={id}
              transaction={transaction}
            />
          ))}
        </>
      )}
    </HistoryContainer>
  );
};

export default History;
