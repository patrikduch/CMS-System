import React from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
import IStyledComponentProps from "../../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import BaseBootstrapButton from "../../../../../common/buttons/Base-Bootstrap-Button";

/**
 * @function AdminListAddItem => Representation of addition new item of article system.
 * @param className => Class name that is generated via "Styled Components" library.
 */
const AdminListAddItem: React.FC<IStyledComponentProps> = ({ className }) => {
  const history = useHistory();

  /**
   * @function handleClick => Event handler that is responsible for user redirection via History API.
   */
  const handleClick = () => {
    history.push("/admin/articles/new");
  };

  return (
    <div className={className}>
      <BaseBootstrapButton action={handleClick}>
        + Nový článek
      </BaseBootstrapButton>
    </div>
  );
};

export default styled(AdminListAddItem)`
  margin-top: 3vh;
  margin-bottom: 1vh;
`;
