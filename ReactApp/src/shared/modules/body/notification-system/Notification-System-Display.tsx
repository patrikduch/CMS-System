import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import ToggleableAlert from "../../../components/common/alerts/Toggleable-Alert";
import NotificationSystemContext from "../../../contexts/notification-system/notification-system.context";

/**
 * @function NotificationSystemDisplay => Display notification if any is available.
 */
const NotificationSystemDisplay: React.FC = () => {
  /* Fetch data from notification system context. */
  const notificationSystemContext = useContext(NotificationSystemContext);

  if (notificationSystemContext.message.length === 0) {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col md="4">
          <ToggleableAlert message={notificationSystemContext.message} />
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationSystemDisplay;
