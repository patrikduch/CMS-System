const moduleCode = "write-us"; // Module code that is needed to be export for dynamic rendering usage

export { moduleCode };

import React, { useState } from "react";
import WriteUsModal from "./Write-Us-Modal";
import WriteUsModuleContext from "../../../contexts/write-us/write-us-module.context";
import WriteUsToggler from "./Write-Us-Toggler";

/**
 * @function WriteUsModule => Module that encapsulates write to us functionality.
 */
const WriteUsModule: React.FC = () => {
  const [modalVisibility, setModalVisiblity] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  /**
   * @function toggleModalState => Change event handler for changing current modal state.
   */
  const toggleModalState = () => {
    setModalVisiblity(!modalVisibility);
  };

  const setRecipientEmailHandler = (recipientEmail: string) => {
    setRecipientEmail(recipientEmail);
  };

  const setSenderEmailHandler = (senderEmail: string) => {
    setSenderEmail(senderEmail);
  };

  return (
    <WriteUsModuleContext.Provider
      value={{
        recipientEmail,
        senderEmail,
        modalVisibility,
        message,
        setMessage,
        setRecipientEmail: setRecipientEmailHandler,
        setSenderEmail: setSenderEmailHandler,
        toggleModalVisibility: toggleModalState,
      }}
    >
      <WriteUsToggler />
      <WriteUsModal />
    </WriteUsModuleContext.Provider>
  );
};

export default WriteUsModule;
