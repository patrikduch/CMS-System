import React, { useContext } from "react";
import styled from "styled-components";
import keyGen from "../../../key-generator";
import { Col, Container, Row } from "reactstrap";

/* Modules */
import SocialIconsModule from "../../../../../modules/body/social-icons/Social-Icons-Module";

/* HOc checker for module state */
import ModuleCheckerHoc from "../../../../../hoc/Module-Checker-Hoc";

/* Type checking */
import ModuleSystemType from "../../../../../../typescript/types/app/models/Module-System-Type";
import NotificationSystemContext from "../../../../../contexts/notification-system/notification-system.context";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  modules: ModuleSystemType[];
  className?: string;
}

/**
 * @function ModuleBodyBottomSection => Component that receives all modules for bottom section of Body area.
 * @param props
 */
const ModuleBodyBottomSection: React.FC<IProps> = (props: IProps) => {
  /* Get notificationSystem context for adding spacing when notification is displayed on the top of application. */
  const notificationSystemContext = useContext(NotificationSystemContext);

  /**
   * @function getBottomModules =>  Get JSX content based on passed moduleName.
   * @param moduleName
   */
  const getBottomModules = (moduleName: string) => {
    switch (moduleName) {
      case "social-icons":
        return <SocialIconsModule key={keyGen()} />;
    }
  };

  /**
   * @function getContent => Dynamic rendering of all bottom modules.
   */
  const getContent = () => {
    return props.modules.map((module: ModuleSystemType) => {
      return (
        <ModuleCheckerHoc isEnabled={module.isEnabled} key={keyGen()}>
          <Col key={keyGen()}>{getBottomModules(module.code)}</Col>
        </ModuleCheckerHoc>
      );
    });
  };

  return (
    <section className={props.className}>
      <Container
        style={
          notificationSystemContext.isVisible
            ? { marginTop: "10vh" }
            : { marginTop: "0vh" }
        }
      >
        <Row>{getContent()}</Row>
      </Container>
    </section>
  );
};
export default styled(ModuleBodyBottomSection)`
  padding: 0; /* Force to delete all padding */
  padding-top: 2vh; /* Add padding to top of this container. Separation from middle section. */
`;
