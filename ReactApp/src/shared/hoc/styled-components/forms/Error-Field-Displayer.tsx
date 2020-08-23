import React from "react";

import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  hasErrorOccured: boolean;
}

/**
 * @function ErrorFieldDisplayer => Encapsulation component for displaying error message.
 */
const ErrorFieldDisplayer: React.FC<IProps> = ({
  children,
  className,
  hasErrorOccured,
}) => {
  if (hasErrorOccured) {
    /* Error field emphation. */
    return <div className={className}>{children}</div>;
  }

  return <div>{children}</div>;
};

export default styled(ErrorFieldDisplayer)`
  border: 1px solid red;
`;
