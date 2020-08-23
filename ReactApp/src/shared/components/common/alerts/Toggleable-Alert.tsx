import { Alert } from "reactstrap";
import React, { useState } from "react";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  message: string;
}

/**
 * @function ToggleableAlert => Shared toggleable alert common component.
 */
const ToggleableAlert: React.FC<IProps> = ({ message, className }) => {
  const [visible, setVisible] = useState(true);

  /**
   * @function onDismissHandler => Closing functionality for Alert box.
   */
  const onDismissHandler = () => setVisible(false);

  return (
    <Alert
      className={`${className}`}
      color="info"
      isOpen={visible}
      toggle={onDismissHandler}
    >
      {message}
    </Alert>
  );
};

export default styled(ToggleableAlert)`
  margin-top: 5vh;
  background-color: ${(props: IProps) => props.theme?.button.bgColor};
  color: ${(props: IProps) => props.theme?.button.color};
`;
