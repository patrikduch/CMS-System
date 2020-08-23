import React, { useState } from "react";
import styled, { css } from "styled-components";
import ChooserModal from "../../../../components/common/modals/Chooser-Modal";

/* Type checking */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import BaseBootstrapButton from "../../../common/buttons/Base-Bootstrap-Button";
import ThemeType from "../../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  signout: () => void;
}

/**
 * @function SidebarLogoutButton => Sidebar logout button.
 * @param signout => Redux signout action that is passed into this component.
 */
const SidebarLogoutButton: React.FC<IProps> = ({ className, signout }) => {
  const [modal, setModal] = useState(false);

  const logout = () => {
    setModal(!modal);
  };

  return (
    <>
      <ChooserModal
        title="Odhlášení"
        message="Opravdu se chcete odhlásit?"
        yesMessage="Ok"
        noMessage="Zrušit"
        isOpen={modal}
        method={signout}
        setModal={setModal}
      />

      <BaseBootstrapButton className={className} action={logout}>
        Odhlásit se{" "}
      </BaseBootstrapButton>
    </>
  );
};

export default styled(SidebarLogoutButton)`
  ${(p: IProps) => {
    const getColors = () => {
      return css`
        background: #3b5998;
        color: white;
        font-size: 1.2em;
      `;
    };

    return css`
      ${getColors()}

      :hover {
        ${getColors()}
      }
    `;
  }}
`;
