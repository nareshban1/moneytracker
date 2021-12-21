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
        <Amt color="#51ff0d">${income}</Amt>
      </AmtContainer>
      <AmtContainer>
        <AmtTitle>Expense</AmtTitle>
        <Amt color="red">${expense}</Amt>
      </AmtContainer>
    </IncomeExpenseContainer>
  );
};

export default IncomeExpense;
