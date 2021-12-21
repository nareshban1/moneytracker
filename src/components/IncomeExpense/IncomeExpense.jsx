import React from "react";
import {
  Amt,
  AmtContainer,
  AmtTitle,
  IncomeExpenseContainer,
} from "./IncomeExpenseStyles";
import { useTransactions } from "../../context/transactionContext";

const IncomeExpense = () => {
  const { income, expense } = useTransactions();
  return (
    <IncomeExpenseContainer>
      <AmtContainer>
        <AmtTitle>Income</AmtTitle>
        <Amt color="green">${income}</Amt>
      </AmtContainer>
      <AmtContainer>
        <AmtTitle>Expense</AmtTitle>
        <Amt color="red">${expense?.toString().substring(1)}</Amt>
      </AmtContainer>
    </IncomeExpenseContainer>
  );
};

export default IncomeExpense;
