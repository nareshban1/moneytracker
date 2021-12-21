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
              type={transaction.type}
              transactionName={transaction.transactionName}
              amount={transaction.amount}
            />
          ))}
        </>
      )}
    </HistoryContainer>
  );
};

export default History;
