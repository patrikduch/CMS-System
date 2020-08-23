import React from "react";
import styled from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";


/**
 * @function Main => Main content of app.
 */
const Main = styled.main<ThemeType>`
  height: 100%;

  background-color: ${(props: ThemeType) => {
    if (props.theme != null) {
      return `${props.theme.body.bgColor}`;
    }
  }};
`;

/**
 * @function BodyContainer => Styled component where all body content will be placed.
 * @param props => passed props data.
 */
const BodyContainer: React.FC<ThemeType> = (props) => {
  return <Main {...props}>{props.children}</Main>;
};

export default BodyContainer;
