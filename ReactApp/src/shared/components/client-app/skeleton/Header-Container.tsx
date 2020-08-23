import React from "react";
import styled from "styled-components";

/* Type checking. */
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

const TitleStyle = styled.header<ThemeType>`
  padding-top: 0.9vh;
  padding-left: 1vw;
  font-size: 1em;
  visibility: visible;
  color: ${(props: ThemeType) => props.theme?.header.color};

  background: ${(props: ThemeType) => {
    if (props.theme != null) {
      return `${props.theme.header.bgColor}`;
    }
  }};
`;

/**
 * @function  HeaderContainer => Encapsulation component for all Header content (navbar, etc.)
 * @param props => passed props data.
 */
const HeaderContainer: React.FC<ThemeType> = (props) => {
  return <TitleStyle {...props}>{props.children}</TitleStyle>;
};

export default HeaderContainer;
