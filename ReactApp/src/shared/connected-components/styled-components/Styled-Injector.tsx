import React from "react";

import GlobalStyle from "../../helpers/styles/styled-components/Global-Style";
import { ThemeProvider } from "styled-components";
import * as themes from "../../themes";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  children: React.ReactElement;
  projectDetail: {
    themeCode: string;
  };
}

/**
 * @function StyledInjector => Styled component helper for setup the correct theme for public side of application.
 * @param props  => passed data props.
 */
const StyledInjector: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={
          props.projectDetail.themeCode == "default-theme"
            ? themes.defaultTheme
            : themes.ouTheme
        }
      >
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default StyledInjector;
