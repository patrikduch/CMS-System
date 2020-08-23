import React, { useContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import CancelButton from "../../../components/common/buttons/Cancel-Button";

/* Fontawesome imports. */
import RecommendUsModuleContext from "../../../contexts/recommend-us/recommend-us-module.context";
import RecommendUsForm from "./Recommend-Us-Form";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {}

/**
 * @function RecommendUsModal => Component for displaying "Reecommend s modal".
 * @param className => Stylization classed that are passed from styled components
 */
const RecommendUsModal: React.FC<IProps> = ({ className }) => {
  const recommendUsModuleContext = useContext(RecommendUsModuleContext);

  return (
    <>
      <Modal
        size="lg"
        isOpen={recommendUsModuleContext.modalVisibility}
        toggle={recommendUsModuleContext.toggleModalVisibility}
        className={className}
      >
        <ModalHeader toggle={recommendUsModuleContext.toggleModalVisibility}>
          DOPORUČTE NÁS
        </ModalHeader>
        <ModalBody>
          <RecommendUsForm />
          Doporučte náši webovou stránku svému známému. <br /> <br />
          <br />
        </ModalBody>
        <ModalFooter>
          <CancelButton
            action={recommendUsModuleContext.toggleModalVisibility}
            isLink
            displayIcon
          >
            Zavřít
          </CancelButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RecommendUsModal;
