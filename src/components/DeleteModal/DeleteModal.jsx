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
import { AnimatePresence } from "framer-motion";
const DeleteModal = ({ viewModal, setViewModal, docid }) => {
  const { getUserTransactions } = useTransactions();

  const deleteTransaction = () => {
    firestore.collection("transactions").doc(docid).delete();
    getUserTransactions();
    setViewModal(false);
  };

  const closeModal = () => {
    setViewModal(false);
  };

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { delay: 0.5 } },
  };

  const card = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={clearAllBodyScrollLocks}>
      {viewModal && (
        <DeleteModalContainer
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <DeleteModalCard variants={card}>
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
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;
