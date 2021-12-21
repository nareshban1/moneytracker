import React, { useState } from "react";
import {
  CardContainer,
  DeleteIcon,
  TransactionAmt,
  TransactionName,
} from "./TransactionCardStyles";

import { ImCross } from "react-icons/im";
import DeleteModal from "../DeleteModal/DeleteModal";
import { disableBodyScroll } from "body-scroll-lock";
const TransactionCard = ({ transactionName, amount, type, transactionID }) => {
  const [viewModal, setViewModal] = useState(false);

  const handleView = () => {
    setViewModal(true);
    disableBodyScroll(document);
  };

  return (
    <>
      <CardContainer borderColor={type === "income" ? "green" : "red"}>
        <TransactionName>{transactionName}</TransactionName>
        <TransactionAmt>
          {amount}
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
    </>
  );
};

export default TransactionCard;
