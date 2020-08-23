import React from "react";
import TextUrlLink from "../links/Text-Url-Link";

import stringShortener from "../../../helpers/data-types/strings/string-shortener";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import styled from "styled-components";

/**
 * Component`s props interface.
 */

interface IProps extends IStyledComponentProps {
  title: string;
  url: string;
}

/**
 * @function ArticleItem => Shared component for article item rendering with React-Router.
 */
const ArticleItem: React.FC<IProps> = ({ className, title, url }) => {
  return (
    <div className={className}>
      <TextUrlLink url={url} title={stringShortener(title, 35)} />
    </div>
  );
};

export default styled(ArticleItem)`
  margin-top: 1vh;
`;
