import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// Cookie helper
import { setCookie } from "../../../helpers/html/Cookie-Helper";
import BaseBootstrapButton from "../buttons/Base-Bootstrap-Button";
import CancelButton from "../buttons/Cancel-Button";
import SubmitButton from "../buttons/Submit-Button";

// Contact for component`s properties

interface Props {
  setModal: Function;
  message: string;
  title: string;
  yesMessage: string;
  noMessage: string;
  isOpen: boolean;
  method: Function;
}

const ChooserModal = (props: Props) => {
  // Switch state of the modal
  const toggle = () => props.setModal();

  // Finish method task and switch the modal state
  const doAction = () => {
    props.method();
    toggle();
    setCookie("test", "agree");
  };

  return (
    <Modal backdrop={false} isOpen={props.isOpen} toggle={toggle}>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalBody>{props.message}</ModalBody>
      <ModalFooter>
        <SubmitButton action={doAction}>{props.yesMessage}</SubmitButton>
        <CancelButton action={toggle}>{props.noMessage}</CancelButton>
      </ModalFooter>
    </Modal>
  );
};

export default ChooserModal;
