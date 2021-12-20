import React from "react";
import {
  Amt,
  AmtContainer,
  AmtTitle,
  IncomeExpenseContainer,
} from "./IncomeExpenseStyles";

const IncomeExpense = () => {
  return (
    <IncomeExpenseContainer>
      <AmtContainer>
        <AmtTitle>Income</AmtTitle>
        <Amt color="green">$100</Amt>
      </AmtContainer>
      <AmtContainer>
        <AmtTitle>Expense</AmtTitle>
        <Amt color="red">$200</Amt>
      </AmtContainer>
    </IncomeExpenseContainer>
  );
};

export default IncomeExpense;
