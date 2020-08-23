import React, { useState } from "react";

/* React hooks life-cycle methods. */
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import useDidUpdate from "../../../hooks/dom/component.didupdate.hook";
import { Col, Card, CardTitle, Row } from "reactstrap";

/* Type checking. */
import ThemeChosserModelType from "../../../../typescript/types/app/models/Theme-Chooser-Model-Type";
import ThemeChooserModelType from "../../../../typescript/types/app/models/Theme-Chooser-Model-Type";

/* Common components. */
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";

/* Component`s props interface. */
interface IProps {
  themes: ThemeChooserModelType[];
  actions: {
    fetchThemes: Function;
    updateProjectTheme: Function;
  };
}

const ThemeChooser: React.FC<IProps> = (props: IProps) => {
  const [isFetched, setFetched] = useState(false);
  const [themes, setThemes] = useState([] as ThemeChosserModelType[]);
  const [themeSelected, setThemeSelected] = useState(0 as number | undefined);

  /**
   * @function getDefaultTheme - finds identifier of current default theme.
   */
  const getDefaultTheme = () => {
    if (isFetched == false) {
      if (props.themes != null) {
        const defaultTheme: ThemeChosserModelType = props.themes.filter(
          (arg: ThemeChosserModelType) => {
            return arg.isDefault == true;
          }
        )[0];

        return defaultTheme.id;
      }
    }
  };

  useDidMount(() => {
    props.actions.fetchThemes();
  });

  useDidUpdate(() => {
    if (!isFetched) {
      setFetched(true);
      setThemes(props.themes);
      setThemeSelected(getDefaultTheme());
    }
  });

  /**
   * @function switchTheme - change currently choosen theme.
   * @param id - identifier of new choosen theme.
   */
  const switchTheme = (id: number, isDefault: boolean) => {
    setThemeSelected(id);
    props.actions.updateProjectTheme(id);
  };

  /**
   * @function renderThemes => Renders all themes with possibility to change default theme.
   */
  const renderThemes = () => {
    if (themes != null) {
      return themes.map((theme) => {
        return (
          <Col md="4" sm="6">
            <Card body outline color="secondary">
              <CardTitle>{theme.name}</CardTitle>
              <BaseBootstrapButton
                action={() => switchTheme(theme.id, theme.isDefault)}
                disabled={theme.id === themeSelected}
              >
                Nastavit
              </BaseBootstrapButton>
            </Card>
          </Col>
        );
      });
    } else {
      return null;
    }
  };

  if (themeSelected != null) {
    return <Row>{renderThemes()}</Row>;
  } else {
    return null;
  }
};

export default ThemeChooser;
