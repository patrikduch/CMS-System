import React from "react";
import { Label } from "reactstrap";

/* Type checking. */
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import styled, { css } from "styled-components";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps
  extends IStyledComponentProps,
    IReactComponentSideProps,
    ThemeType {
  elementRef: string /* Substituation of attribute "for" */;
}

/**
 * @function LabelBasic => Reactstrap label component that is under styled components provider.
 */
const LabelBasic: React.FC<IProps> = ({ children, className, elementRef }) => {
  return (
    <Label className={className} for={elementRef}>
      {children}
    </Label>
  );
};

export default styled(LabelBasic)`
  ${(props: IProps) => {
    if (props.isPublicSide) {
      return css`
        color: ${props.theme?.body.color};
      `;
    }
  }}
`;
