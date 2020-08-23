import React from "react";
import { SocialIcon } from "react-social-icons";
import keygen from "../../../helpers/dynamic-rendering/key-generator";
import styled from "styled-components";

import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

// Props interface
interface IProps extends IStyledReactComponentProps {
  url: string; // Url of social icon
}

/*
  Display single social icon item idividualy. (Facebook, Twitter, LinkedIn social icon.)
*/
const SocialIconsItem: React.FC<IProps> = (props: IProps) => {
  return (
    <SocialIcon className={props.className} key={keygen()} url={props.url} />
  );
};

export default styled(SocialIconsItem)`
  margin-left: 0.3rem; /* Move icon to left for better separation more social icons. */
`;
