import React from "react";
import { Row, Col } from "reactstrap";
import AdminLoginErrorMessage from "../error-message/Admin-Login-Error-Message";

/**
 * @function AdminLoginErrorContainer => Styled container component to display error when provided login data are incorrect.
 */
const AdminLoginError: React.FC = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <AdminLoginErrorMessage />
      </Col>
    </Row>
  );
};

export default AdminLoginError;
