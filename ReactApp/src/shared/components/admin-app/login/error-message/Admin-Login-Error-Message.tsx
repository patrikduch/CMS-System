import React from "react";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import { Alert } from "reactstrap";

/**
 * @function AdminLoginErrorMessage => Component that displays error message when login process fails.
 */
const AdminLoginErrorMessage: React.FC<IStyledComponentProps> = ({
  className
}) => {
  return (
    <div className={className}>
      <Alert color="danger">Zadejte platné uživatelské jméno a heslo.</Alert>
    </div>
  );
};

export default styled(AdminLoginErrorMessage)`
  padding: 2rem;
  text-align: center;
  margin-bottom: -2vh;
  margin-top: -4vh;
`;
