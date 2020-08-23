import React from "react";

import styled, { css } from "styled-components";
import BaseBootstrapButton from "./Base-Bootstrap-Button";

/* Type checking. */
import IBootstrapButtonProps from "../../../../typescript/interfaces/app/component/common/IBootstrap-Button-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/* Font awesome imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";

/**
 * @interface IStyleProps => Component`s style props.
 */
interface IStyleProps extends IReactComponentSideProps, ThemeType {}

/**
 * @function CancelButtonStyle => Common button component style for rendering cancel button. Used for example on modals etc.
 * This type of component is only used to fetch all necessary style definitions.
 */
const CancelButtonStyle = styled(BaseBootstrapButton)`
  ${(p: IStyleProps) => {
    if (p.isPublicSide) {
      return css`
        background: ${(props: ThemeType) => props.theme?.button.danger.bgColor};
        color: ${(props: ThemeType) => props.theme?.button.danger.color};
        border: 1px solid
          ${(props: ThemeType) => props.theme?.button.danger.color};

        :hover {
          text-decoration: none;
          opacity: 0.6;
          background: ${(props: ThemeType) =>
            props.theme?.button.danger.bgColor};
          color: ${(props: ThemeType) => props.theme?.button.danger.color};
          border: 1px solid
            ${(props: ThemeType) => props.theme?.button.danger.color};
        }
      `;
    } else {
      return css`
        background: black;
        color: white;
        border: 1px solid white;

        :hover {
          text-decoration: none;
          opacity: 0.6;
          background: black;
          color: white;
          border: 1px solid white;
        }
      `;
    }
  }}
`;

/**
 * @function CancelButton => Common cancel button functionality which is depended on CancelButtonStyle.
 */
const CancelButton: React.FC<IBootstrapButtonProps> = ({
  action,
  children,
  displayIcon,
}) => {
  return (
    <CancelButtonStyle action={action}>
      {displayIcon && (
        <>
          <FontAwesomeIcon icon={faTimes} />{" "}
        </>
      )}
      {children}
    </CancelButtonStyle>
  );
};

export default CancelButton;
