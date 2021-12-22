import React, { useState } from "react";
import { firestore } from "../../helpers/firebase";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import { ImCross } from "react-icons/im";
import { useTransactions } from "../../context/transactionContext";
import {
  CloseButton,
  EditButton,
  EditModalCard,
  EditModalContainer,
  Header,
  Title,
} from "./EditModalStyles";

import {
  AddButton,
  AddTransactionForm,
  FormInput,
  FormLabel,
  FormOptions,
  FormSelect,
  SmallInfo,
  TransactionFormContainer,
  TransactionTitle,
  CheckBox,
  Slider,
  Switch,
  TransactionTypeContainer,
} from "../TransactionForm/TransactionFormStyles";
const EditModal = ({ setViewEditModal, transaction, docid }) => {
  const { getUserTransactions } = useTransactions();
  const [transactionName, setTransactionName] = useState(
    transaction.transactionName
  );
  const [amount, setAmount] = useState(transaction.amount);
  const [error, setError] = useState("");
  const [remarks, setRemarks] = useState(transaction.remarks);
  const [purpose, setPurpose] = useState(transaction.purpose);
  const [type, setType] = useState(transaction.type);

  const updateTransaction = (e) => {
    e.preventDefault();
    if (amount !== "0" || amount !== "") {
      firestore.collection("transactions").doc(docid).update({
        transactionName: transactionName,
        amount: amount,
        purpose: purpose,
        remarks: remarks,
        type: type,
      });
      clearAllBodyScrollLocks();
      setViewEditModal(false);
    } else {
      setError("Amount must not be 0");
    }
  };

  const closeModal = () => {
    clearAllBodyScrollLocks();
    setViewEditModal(false);
  };

  const handleChange = () => {
    if (type === "income") {
      setType("expense");
    } else {
      setType("income");
    }
  };
  return (
    <EditModalContainer>
      <EditModalCard>
        <Header>
          <Title>Edit Transaction</Title>
          <CloseButton onClick={closeModal}>
            <ImCross />
          </CloseButton>
        </Header>
        <TransactionFormContainer onSubmit={updateTransaction}>
          <AddTransactionForm>
            <FormLabel htmlFor="transactionType">
              Transaction Type
              <TransactionTypeContainer
                color={type === "income" ? "green" : "red"}
              >
                <Switch>
                  <CheckBox
                    type="checkbox"
                    checked={type === "income" ? true : false}
                    onChange={handleChange}
                    color={type === "income" ? "green" : "red"}
                  />
                  <Slider />
                </Switch>
                {type}
              </TransactionTypeContainer>
            </FormLabel>
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
                <FormOptions value="Bill Sharing">Income/Salary</FormOptions>
                <FormOptions value="Bill Sharing">Bill Sharing</FormOptions>
                <FormOptions value="Family Expenses">
                  Family Expenses
                </FormOptions>
                <FormOptions value="Lend/Borrow">Lend/Borrow</FormOptions>
                <FormOptions value="Personal Use">Personal Use</FormOptions>
                <FormOptions value="Others">Others</FormOptions>
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
            <EditButton>Update</EditButton>
          </AddTransactionForm>
        </TransactionFormContainer>
      </EditModalCard>
    </EditModalContainer>
  );
};

export default EditModal;
