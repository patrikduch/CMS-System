import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps
  extends IReactComponentSideProps,
    IStyledComponentProps,
    ThemeType {
  action?: () => void /* Optional actions that will be executed. */;
  disabled?: boolean;
  onMouseEnterAction?: (event: SyntheticEvent) => void;
}

/**
 * @function BaseBootstrapButton => Common base bootstrap component. From this type of component is recommend to derive new ones.
 * @param children => Nested JSX elements that are passed into BootstrapButton component.
 * @param className => Class name that is generated via CSS procesor "styled components".
 */
const BaseBootstrapButton: React.FC<IProps> = ({
  action,
  children,
  className,
  disabled,
  onMouseEnterAction,
}) => {
  return (
    <Button
      color="link"
      className={className}
      disabled={disabled}
      onClick={action}
      onMouseEnter={onMouseEnterAction}
    >
      {children}
    </Button>
  );
};

export default styled(BaseBootstrapButton)`
  background-color: ${(props: IProps) =>
    props.isPublicSide ? props.theme?.button.bgColor : "black"};

  color: ${(props: IProps) => props.theme?.button?.color};

  border: 1px solid
    ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.color : "black"};

  /* Alignment for multiuple buttons alongside of each other. */
  margin-right: 1vw;
  margin-bottom: 1vh;

  /* CSS transition. */
  transition-property: opacity;
  transition-duration: 500ms;

  :hover {
    text-decoration: none;
    opacity: 0.75;
    background: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.bgColor : "black"};
    color: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.color : "white"};
    border: 1px solid
      ${(props: IProps) =>
        props.isPublicSide ? props.theme?.button.color : "black"};
  }
`;
