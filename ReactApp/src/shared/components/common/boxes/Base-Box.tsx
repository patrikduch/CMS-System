import React from "react";
import styled, { css } from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

const BoxStyle = styled.div<ThemeType>`
  border: 2px dashed red;
  height: 15vh;
`;
const BaseBox: React.FC<ThemeType> = (props) => {
  return <BoxStyle>{props.children}</BoxStyle>;
};

export { BaseBox };
