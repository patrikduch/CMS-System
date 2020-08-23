import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

// Styled component`s props interface
import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* 
  Stylization of displayed text of Day-Notification module.
*/
const DayNotificationContainer: React.FC<IStyledReactComponentProps> = ({
  children,
  className
}) => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4">
          <div className={className}>
            <p>{children}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default styled(DayNotificationContainer)`
  padding-top: 2vh;
  font-family: sans-serif;
  font-size: 1.1rem;
`;
