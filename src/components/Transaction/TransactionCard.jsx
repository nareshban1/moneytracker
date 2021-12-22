import React, { useState } from "react";
import {
  CardContainer,
  DeleteIcon,
  TransactionAmt,
  TransactionName,
  EditIcon,
} from "./TransactionCardStyles";

import { ImCross, ImPencil } from "react-icons/im";
import DeleteModal from "../DeleteModal/DeleteModal";
import { disableBodyScroll } from "body-scroll-lock";
import EditModal from "../EditModal/EditModal";
const TransactionCard = ({ transaction, transactionID }) => {
  const [viewModal, setViewModal] = useState(false);
  const [viewEditModal, setViewEditModal] = useState(false);

  const handleView = () => {
    setViewModal(true);
    disableBodyScroll(document);
  };

  const handleEditView = () => {
    setViewEditModal(true);
    disableBodyScroll(document);
  };

  return (
    <>
      <CardContainer
        borderColor={transaction.type === "income" ? "green" : "red"}
      >
        <TransactionName>{transaction.transactionName}</TransactionName>
        <TransactionAmt>
          {transaction.amount}
          <EditIcon onClick={handleEditView}>
            <ImPencil />
          </EditIcon>
          <DeleteIcon onClick={handleView}>
            <ImCross />
          </DeleteIcon>
        </TransactionAmt>
      </CardContainer>
      {viewModal && (
        <DeleteModal
          viewModal={viewModal}
          setViewModal={setViewModal}
          docid={transactionID}
        />
      )}

      {viewEditModal && (
        <EditModal
          setViewEditModal={setViewEditModal}
          docid={transactionID}
          transaction={transaction}
        />
      )}
    </>
  );
};

export default TransactionCard;
