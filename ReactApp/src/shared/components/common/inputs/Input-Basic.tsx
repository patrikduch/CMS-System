import React from "react";

import Input, { InputType } from "reactstrap/lib/Input";
import styled, { css } from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";
import IEventHandlerForm from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import IEventHandlerHTMLElement from "../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps
  extends IStyledComponentProps,
    ThemeType,
    IReactComponentSideProps {
  id: string;
  name: string;
  type: InputType;
  value: string;
  placeholder?: string;
  onBlur?(event: IEventHandlerHTMLElement): void | null;
  onChange?(event: IEventHandlerHTMLElement): void | null;
  onClick?(event: IEventHandlerForm): void | null;
  onFocus?(event: IEventHandlerHTMLElement): void | null;
}

/**
 * @function InputBasic => Reactstrap common input component, that is under Styled-components provider.
 */
const InputBasic: React.FC<IProps> = ({
  className,
  id,
  name,
  type,
  onBlur,
  onChange,
  onClick,
  onFocus,
  value,
}) => {
  return (
    <Input
      className={className}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      name={name}
      type={type}
      value={value}
    />
  );
};

export default styled(InputBasic)`
  ${(p: IProps) => {
    if (p.type == "submit") {
      return css`
        background-color: ${(props: IProps) =>
          props.isPublicSide ? props.theme?.button.bgColor : "black"};

        color: ${(props: IProps) => props.theme?.button?.color};

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
    }
  }}
`;
