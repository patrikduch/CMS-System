import React, { useContext } from "react";

/* Font awesome imports */
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import WriteUsForm from "./Write-Us-Form";
import CancelButton from "../../../components/common/buttons/Cancel-Button";
import WriteUsModuleContext from "../../../contexts/write-us/write-us-module.context";

const WriteUsModal: React.FC = () => {
  const writeUsModuleContext = useContext(WriteUsModuleContext);

  return (
    <Modal
      size="lg"
      isOpen={writeUsModuleContext.modalVisibility}
      toggle={writeUsModuleContext.toggleModalVisibility}
    >
      <ModalHeader toggle={writeUsModuleContext.toggleModalVisibility}>
        NAPIŠTE NÁM
      </ModalHeader>
      <ModalBody>
        <WriteUsForm />
        <br />
        <p>Máte nápad, připomínku či vzkaz? Napište nám!</p>
      </ModalBody>
      <ModalFooter>
        <CancelButton
          action={writeUsModuleContext.toggleModalVisibility}
          isLink
          displayIcon
        >
          Zavřít
        </CancelButton>
      </ModalFooter>
    </Modal>
  );
};

export default WriteUsModal;
