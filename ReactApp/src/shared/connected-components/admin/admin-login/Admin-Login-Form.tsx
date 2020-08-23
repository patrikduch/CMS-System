import React, { useState } from "react";

/* Reactstrap import (Bootstrap v4) */
import { Form, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import AdminLoginHeader from "../../../components/admin-app/login/Admin-Login-Header";

/* Styled-components dependencies. */
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* Error display component. */
import AdminLoginErrorContainer from "../../../components/admin-app/login/error-message/Admin-Login-Error-Container";
import ErrorFieldDisplayer from "../../../hoc/styled-components/forms/Error-Field-Displayer";
/* Common components import */
import InputBasic from "../../../components/common/inputs/Input-Basic";
import LabelBasic from "../../../components/common/labels/Label-Basic";
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";

/**
 * @interface IAdminLoginFormProps => Component`s props interface.
 */
interface IAdminLoginFormProps extends IStyledComponentProps {
  /* Redux mapped props. */
  adminLogin: {
    failedLogin: boolean;
  };

  actions: {
    authenticate: Function; // authenticate (Redux action) to process admin login credentials
  };
}

/**
 * @function AdminLoginForm => Form component that is responsible for administrator`s sign in functionality.
 * @param actions => Redux actions that handels admin auth.
 * @param adminLogin => Auth object that comes from Redux store.
 * @param className => Generated classname via "styled-components" library.
 */
const AdminLoginForm: React.FC<IAdminLoginFormProps> = ({
  actions,
  adminLogin,
  className,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* Manipulation of web elements via state property */
  const fieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "passwordLabel":
        setPassword(e.target.value);
        break;
      case "usernameLabel":
        setUsername(e.target.value);
        break;
    }
  };

  /**
   * @function signIn => Sign in process with error handling.
   */
  const signIn = () => {
    actions.authenticate(username, password);
  };
  return (
    <Container className={className}>
      <Row>
        <Col>
          <AdminLoginHeader />
        </Col>
      </Row>

      {adminLogin.failedLogin && <AdminLoginErrorContainer />}

      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form>
            <FormGroup>
              <LabelBasic elementRef="usernameLabel">Login</LabelBasic>
              <ErrorFieldDisplayer hasErrorOccured={adminLogin.failedLogin}>
                <InputBasic
                  type="text"
                  name="username"
                  id="usernameLabel"
                  value={username}
                  placeholder=""
                  onChange={fieldChangeHandler}
                />
              </ErrorFieldDisplayer>
            </FormGroup>
            <FormGroup>
              <LabelBasic elementRef="passwordLabel">Heslo</LabelBasic>
              <ErrorFieldDisplayer hasErrorOccured={adminLogin.failedLogin}>
                <InputBasic
                  type="password"
                  name="password"
                  id="passwordLabel"
                  value={password}
                  placeholder=""
                  onChange={fieldChangeHandler}
                />
              </ErrorFieldDisplayer>
            </FormGroup>
            <BaseBootstrapButton action={signIn}>
              Přihlásit se
            </BaseBootstrapButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default styled(AdminLoginForm)`
  margin-top: 2vh;
`;
