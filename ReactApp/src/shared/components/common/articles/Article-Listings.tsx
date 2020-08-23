import React from "react";
import styled from "styled-components";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

const ArticleListingStyle = styled.div`
  margin-bottom: 1vh;
`;
const ArticleListing: React.FC<IStyledComponentProps> = ({
  children,
  className,
}) => {
  return (
    <ArticleListingStyle className={className}>{children}</ArticleListingStyle>
  );
};

export default ArticleListing;
