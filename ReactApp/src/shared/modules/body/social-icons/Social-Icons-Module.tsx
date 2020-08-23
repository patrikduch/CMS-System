import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { SocialIconsContainer } from "../../../redux/containers/social-icons/Social-Icons-Container";
import styled, { css } from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";

/**
 * @function SocialIconsModule => Displays all social icons that are setup from administration.
 */
const SocialIconsModule: React.FC<IStyledComponentProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 5 }}>
          .<SocialIconsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default styled(SocialIconsModule)`
  /* Long and small devices. */
  @media only screen and (min-height: 600px) and (max-width: 250px) {
    text-align: center;
    /*background: red; */
    margin-top: 0;
    margin-bottom: 2.5vh;
  }

  @media only screen and (min-height: 300px) and (max-height: 650px) and (min-width: 251px) {
    /*background: orange; */
    margin-bottom: 5.5vh;
  }

  @media only screen and (min-height: 651px) and (max-height: 850px) {
    margin-bottom: 15.5vh;
    /*background: blue; */
  }

  ${() => {
    const notificationSystemContext = useContext(NotificationSystemContext);

    if (notificationSystemContext.isVisible) {
      return css`
        padding-bottom: 15vh;
      `;
    }
  }}
`;
