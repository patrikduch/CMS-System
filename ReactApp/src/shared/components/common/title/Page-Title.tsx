import React from "react";
import styled, { css } from "styled-components";

/*  Type checking. */
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";


/**
 * @interface IHeaderTitleProps =>  Component`s props interface
 */
interface IHeaderTitleProps
  extends ThemeType,
    IReactComponentSideProps,
    IStyledComponentProps {
  isCentered?: boolean /* Is heading centered? */;
}

/**
 * @function PageTitle => Renders title for currently chosen page.
 * @param children => Content that is passed into component.
 * @param className => Generated className from styled-components library.
 */
const PageTitle: React.FC<IHeaderTitleProps> = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export default styled(PageTitle)`
  ${(p: IHeaderTitleProps) => {
    if (p.theme != null) {
      const fontSize = p.isPublicSide ? css`1.4em` : css`2.5em`;
      const paddingBottom = p.isPublicSide ? css`0.5vh` : css`1vh`;
      const color = p.isPublicSide
        ? css`
            ${p.theme.secondaryColor}
          `
        : "black";

      return css`
        color: ${color};
        font-size: ${fontSize};
        padding-top: 2vh;
        padding-bottom: ${paddingBottom};
        text-align: ${p.isCentered == true ? "center" : "left"};
      `;
    }
  }}
`;
