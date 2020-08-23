import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import IReactComponentSideProps from "../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";

/**
 * @interface IProps
 */
interface IProps
  extends IStyledComponentProps,
    IReactComponentSideProps,
    ThemeType {
  action?: () => void;
  url: string;
  title: string;
}

/**
 * @function TextUrlLink => Common shared component for creating basic text url link.
 * @param title => Title of url
 * @param url => Url where to address.
 */
const TextUrlLink: React.FC<IProps> = ({ action, className, title, url }) => {
  if (action !== undefined) {
    return (
      <Link className={className} to={url} onClick={action}>
        {title}
      </Link>
    );
  }

  return (
    <Link className={className} to={url}>
      {title}
    </Link>
  );
};

export default styled(TextUrlLink)`
  color: ${(props: IProps) =>
    props.isPublicSide ? props.theme?.link.color : "black"};
  font-weight: bold;

  :hover {
    color: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.link.color : "black"};
  }
`;
