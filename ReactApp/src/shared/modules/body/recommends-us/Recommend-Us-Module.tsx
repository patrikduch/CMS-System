import React, { useState } from "react";
import RecommendUsModuleContext from "../../../contexts/recommend-us/recommend-us-module.context";
import RecommendUsToggler from "./Recommend-Us-Toggler";
import RecommendUsModal from "./Recommend-Us-Modal";

/**
 * @function RecommendUsModule => Entry component of recommends us module functionality.
 */
const RecommendUsModule: React.FC = () => {
  const [modalVisibility, setModalVisiblity] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  /**
   * @function toggleModalStateHandler => Change event handler for changing current modal state.
   */
  const toggleModalStateHandler = () => {
    setModalVisiblity(!modalVisibility);
  };

  /**
   * @function setRecipientEmailHandler => Change event handler for changing recipient field of  RecommendUs modal.
   * @param recipientEmail
   */
  const setRecipientEmailHandler = (recipientEmail: string) => {
    setRecipientEmail(recipientEmail);
  };

  /**
   * @function setSenderEmailHandler => Change event handler for changing sender field of  RecommendUs modal.
   * @param senderEmail
   */
  const setSenderEmailHandler = (senderEmail: string) => {
    setSenderEmail(senderEmail);
  };

  return (
    <RecommendUsModuleContext.Provider
      value={{
        modalVisibility,
        recipientEmail,
        senderEmail,
        setRecipientEmail: setRecipientEmailHandler,
        setSenderEmail: setSenderEmailHandler,
        toggleModalVisibility: toggleModalStateHandler,
      }}
    >
      <RecommendUsToggler />
      <RecommendUsModal />
    </RecommendUsModuleContext.Provider>
  );
};

export default RecommendUsModule;
