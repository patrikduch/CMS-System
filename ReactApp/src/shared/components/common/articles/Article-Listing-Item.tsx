import React from "react";
import styled from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

const ArticleListingItemStyle = styled.div<ThemeType>`
  margin-top: 5vh;
`;
const ArticleListingItem: React.FC<ThemeType> = (props) => {
  return <ArticleListingItemStyle>{props.children}</ArticleListingItemStyle>;
};

export default ArticleListingItem;
