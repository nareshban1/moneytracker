import React, { useState } from "react";
import {
  AddButton,
  AddTransactionForm,
  FormInput,
  FormLabel,
  FormOptions,
  FormSelect,
  TransactionFormContainer,
  TransactionTitle,
} from "./TransactionFormStyles";
import { useAuth } from "../../context/authContext";
import { firestore } from "../../helpers/firebase";

import firebase from "firebase/compat/app";

const TransactionForm = () => {
  const { currentUser } = useAuth();

  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [remarks, setRemarks] = useState("");
  const [purpose, setPurpose] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount !== "0" || amount !== "") {
      firestore.collection("transactions").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        transactionName: transactionName,
        amount: amount,
        purpose: purpose,
        remarks: remarks,
        uid: currentUser.uid,
      });

      setTransactionName("");
      setAmount("");
      setPurpose("");
      setRemarks("");
      setError("");
    } else {
      setError("Amount must not be 0");
    }
  };
  return (
    <TransactionFormContainer onSubmit={handleSubmit}>
      <TransactionTitle>Add Transaction</TransactionTitle>
      <AddTransactionForm>
        <FormLabel htmlFor="transactionName">
          Transaction Name
          <FormInput
            type="text"
            name="transactionName"
            placeholder="Enter Transaction Name"
            required
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </FormLabel>
        <FormLabel htmlFor="transactionAmt">
          Amount
          <FormInput
            type="number"
            name="transactionAmt"
            placeholder="Enter Transaction Anount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormLabel>
        {error.length !== 0 && error}
        <FormLabel htmlFor="transactionAmt">
          Purpose
          <FormSelect
            type="select"
            name="purpose"
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <FormOptions value="Bill Sharing">Bill Sharing</FormOptions>
            <FormOptions value="Family Expenses">Family Expenses</FormOptions>
            <FormOptions value="Lend/Borrow">Lend/Borrow</FormOptions>
            <FormOptions value="Personal Use">Personal Use</FormOptions>
          </FormSelect>
        </FormLabel>
        <FormLabel htmlFor="transactionAmt">
          Remarks
          <FormInput
            type="text"
            name="remarks"
            placeholder="Remarks"
            required
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </FormLabel>
        {error.length !== 0 && error}

        <AddButton>Add Transaction</AddButton>
      </AddTransactionForm>
    </TransactionFormContainer>
  );
};

export default TransactionForm;
