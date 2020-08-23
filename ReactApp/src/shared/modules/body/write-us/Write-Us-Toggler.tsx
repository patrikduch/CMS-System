import React, { useContext } from "react";
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import WriteUsModuleContext from "../../../contexts/write-us/write-us-module.context";

/**
 * @function WriteUsToggler => Toggling functionality of Write-To-Us modal.
 */
const WriteUsToggler: React.FC = () => {
  const writeUsModalContext = useContext(WriteUsModuleContext);

  return (
    <BaseBootstrapButton
      action={writeUsModalContext.toggleModalVisibility}
      isPublicSide
    >
      <FontAwesomeIcon icon={faEnvelope} /> {""} Napište nám
    </BaseBootstrapButton>
  );
};

export default WriteUsToggler;
