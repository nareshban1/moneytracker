import React from "react";
import { firestore } from "../../helpers/firebase";
import {
  CloseButton,
  DeleteButton,
  DeleteInfo,
  DeleteModalCard,
  DeleteModalContainer,
  Header,
  Title,
} from "./DeleteModalStyles";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import { ImCross } from "react-icons/im";
import { useTransactions } from "../../context/transactionContext";
const DeleteModal = ({ viewModal, setViewModal, docid }) => {
  const { getUserTransactions } = useTransactions();

  const deleteTransaction = () => {
    firestore.collection("transactions").doc(docid).delete();
    getUserTransactions();
    setViewModal(false);
    clearAllBodyScrollLocks();
  };

  const closeModal = () => {
    clearAllBodyScrollLocks();
    setViewModal(false);
  };

  return (
    <DeleteModalContainer>
      <DeleteModalCard>
        <Header>
          <Title>Confirm Delete</Title>
          <CloseButton onClick={closeModal}>
            <ImCross />
          </CloseButton>
        </Header>
        <DeleteInfo>
          Are You sure you want to delete this transaction?
        </DeleteInfo>
        <DeleteButton onClick={deleteTransaction}>Delete</DeleteButton>
      </DeleteModalCard>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
