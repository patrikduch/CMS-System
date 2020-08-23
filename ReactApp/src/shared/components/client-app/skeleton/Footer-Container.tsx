import styled from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @function FooterContainer => Footer styled component where Copyright information will be placed.
 */
const FooterContainer = styled.footer<ThemeType>`
  background: ${(props: ThemeType) => {
    if (props.theme != null) {
      return `${props.theme.footer.bgColor}`;
    }
  }};
  color: ${(props: ThemeType) => {
    if (props.theme != null) {
      return `${props.theme.footer.color}`;
    }
  }};

  /* Adjustment for fat devices 
  * IPAD mini, IPAD pro, desktop devices.
  */

  @media only screen and (min-height: 660px) and (min-width: 200px) {
    bottom: 0;
    position: fixed;
    z-index: 9;
    width: 100%;
  }
`;

export default FooterContainer;
