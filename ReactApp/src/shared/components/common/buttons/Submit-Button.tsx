import React from "react";

import styled, { css } from "styled-components";
import BaseBootstrapButton from "./Base-Bootstrap-Button";

/* Typings. */
import IBootstrapButtonProps from "../../../../typescript/interfaces/app/component/common/IBootstrap-Button-Props";

/**
 * @function SubmitButtonStyle => Common button component style for rendering submit button. Used for example on modals etc.
 * This type of component is only used to fetch all necessary style definitions.
 */
const SubmitButtonStyle = styled(BaseBootstrapButton)`
  ${() => {
    const setColors = () => {
      return css`
        background: ${(props: IBootstrapButtonProps) =>
          props.isPublicSide ? props.theme?.button.success.bgColor : "white"};
        color: ${(props: IBootstrapButtonProps) =>
          props.isPublicSide ? props.theme?.button.success.color : "black"};
        border: 1px solid
          ${(props: IBootstrapButtonProps) =>
            props.isPublicSide ? props.theme?.button.success.color : "black"};
      `;
    };

    return css`
      ${setColors()}

      :hover {
        text-decoration: none;
        opacity: 0.6;
        ${setColors()}
      }
    `;
  }}
`;

/**
 * @function SubmitButton => Common submit button functionality which is depended on SubmitButtonStyle.
 */
const SubmitButton: React.FC<IBootstrapButtonProps> = ({
  action,
  children,
  isPublicSide,
}) => {
  return (
    <SubmitButtonStyle isPublicSide={isPublicSide} action={action}>
      {children}
    </SubmitButtonStyle>
  );
};

export default SubmitButton;
