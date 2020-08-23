import React, { useContext } from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecommendUsModuleContext from "../../../contexts/recommend-us/recommend-us-module.context";

/**
 * @function RecommendUsToggler => Toggling functionality of RecommendUs modal.
 */
const RecommendUsToggler: React.FC = () => {
  const recommendUsModuleContext = useContext(RecommendUsModuleContext);

  return (
    <BaseBootstrapButton
      action={recommendUsModuleContext.toggleModalVisibility}
      isPublicSide
    >
      <FontAwesomeIcon icon={faExternalLinkAlt} /> {""} Doporučte nás
    </BaseBootstrapButton>
  );
};

export default RecommendUsToggler;
