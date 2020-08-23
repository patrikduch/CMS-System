import React from "react";
import styled from "styled-components";

/* Type checking. */
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IPageSubtitleProps => Component`s props interface.
 */
interface IPageSubtitleProps extends IStyledComponentProps, ThemeType {}

/**
 * @function PageSubTitle => Nested page title that represents h3 html element.
 * @param children => Content node that is placed inside this common component.
 * @param className => Generated classname via "styled-components" library.
 */
const PageSubTitle: React.FC<IPageSubtitleProps> = ({
  children,
  className,
}) => {
  return <h3 className={className}>{children}</h3>;
};

export default styled(PageSubTitle)`
  font-size: 0.99em;
  margin-bottom: 1.2vh;
  font-weight: bold;
`;
