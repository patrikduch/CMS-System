import React from "react";
import keygen from "../../../../helpers/dynamic-rendering/key-generator";
// Single social icons item }Separation of Social-Icons-List component
import SocialIconsItem from "../../../../modules/body/social-icons/Social-Icons-Item";

/* Type checking. */
import SocialIconModelType from "../../../../../typescript/types/app/models/Social-Icon-Model-Type";

import styled from "styled-components";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  socialIcons?: SocialIconModelType[];
}

/**
 * @function SocialIconsList => Component for rendering social icons.
 * @param props => Properties such as social icon url, code and name.
 */
const SocialIconsList: React.FC<IProps> = (props: IProps) => {
  const getSocialIcons = () => {
    if (props.socialIcons != null) {
      return props.socialIcons.map(
        (response: { url: string; code: string; name: string }) => {
          return <SocialIconsItem key={keygen()} url={response.url} />;
        }
      );
    }
  };

  return <div className={props.className}>{getSocialIcons()}</div>;
};

export default styled(SocialIconsList)`
  /* Centeralize social icons to the center for low resolution device. */
  @media (max-width: 700px) {
    text-align: center;
  }
`;
