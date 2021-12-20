import React from "react";
import {
  AddButton,
  AddTransactionForm,
  FormInput,
  FormLabel,
  TransactionFormContainer,
  TransactionTitle,
} from "./TransactionFormStyles";

const TransactionForm = () => {
  return (
    <TransactionFormContainer>
      <TransactionTitle>Add Transaction</TransactionTitle>
      <AddTransactionForm>
        <FormLabel htmlFor="transactionName">
          Transaction Name
          <FormInput
            type="text"
            name="transactionName"
            placeholder="Enter Transaction Name"
          />
        </FormLabel>
        <FormLabel htmlFor="transactionAmt">
          Amount
          <FormInput
            type="number"
            name="transactionAmt"
            placeholder="Enter Transaction Anount"
          />
        </FormLabel>
        <AddButton>Add Transaction</AddButton>
      </AddTransactionForm>
    </TransactionFormContainer>
  );
};

export default TransactionForm;
