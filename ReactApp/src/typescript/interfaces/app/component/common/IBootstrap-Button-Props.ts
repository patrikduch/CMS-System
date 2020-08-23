import IStyledComponentProps from "../../../shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../types/shared/themes/Theme-Type";
import IReactComponentSideProps from "../../../shared/styled-components/IReact-Component-Side-Props";

/**
 * @interface IBootstrapButtonProps => Contract for common button component.
 */
interface IBootstrapButtonProps
  extends IReactComponentSideProps,
    IStyledComponentProps,
    ThemeType {
  isLink?: boolean;
  action?: () => void /* Optional actions that will be executed. */;
  displayIcon?: boolean;
}

export default IBootstrapButtonProps;
