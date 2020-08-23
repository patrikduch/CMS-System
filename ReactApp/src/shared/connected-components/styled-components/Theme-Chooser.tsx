import React, { useEffect, useState } from "react";
import { Col, Card, CardTitle, Button, Row } from "reactstrap";

/* Unique key generation */
import keygen from "../../helpers/dynamic-rendering/key-generator";

import useDidMount from "../../hooks/dom/component.didmount.hook";
import useDidUpdate from "../../hooks/dom/component.didupdate.hook";

/* Type checking. */
import ThemeChooserModelType from "../../../typescript/types/app/models/Theme-Chooser-Model-Type";

/* Component`s props interface. */
interface IProps {
  themes: ThemeChooserModelType[];
  actions: {
    fetchThemes: Function;
    updateProjectTheme: Function;
  };
}

const ThemeChooser: React.FC<IProps> = (props: IProps) => {
  const [isFetched, setIsFetched] = useState(false);
  const [themeId, setThemeId] = useState(null as number | null);

  /**
   * @function getDefaultTheme - find identifier of current default theme.
   * @returns  numberic value that represents theme identifier.
   */
  const getDefaultTheme = () => {
    if (isFetched == true) {
      if (props.themes.length > 0) {
        const defaultTheme = props.themes.filter(
          (arg: ThemeChooserModelType) => {
            return arg.isDefault == true;
          }
        );

        return defaultTheme[0].id;
      }
    }

    return null;
  };

  useDidMount(() => {
    props.actions.fetchThemes();
    setIsFetched(true);
  });

  useDidUpdate(() => {
    if (isFetched && themeId == null) {
      setThemeId(getDefaultTheme());
    }
  });

  /**
   * @function switchTheme - change selected theme by numeric identifier.
   * @param id - identifier of newly choosen theme.
   */
  const switchTheme = (id: number) => {
    setThemeId(id);
    props.actions.updateProjectTheme(id);
  };

  /**
   * @function renderThemes - display all themes which can be selected.
   */
  const renderThemes = () => {
    if (props.themes != null) {
      return props.themes.map((theme: ThemeChooserModelType) => {
        return (
          <Col key={keygen()} md="4" sm="6">
            <Card body outline color="secondary">
              <CardTitle>{theme.name}</CardTitle>
              <Button
                onClick={() => switchTheme(theme.id)}
                disabled={theme.id == themeId}
              >
                Nastavit
              </Button>
            </Card>
          </Col>
        );
      });
    } else {
      return null;
    }
  };

  if (themeId != null) {
    return <Row>{renderThemes()}</Row>;
  } else {
    return null;
  }
};

export default ThemeChooser;
