import { createSelector } from "reselect";
import ThemeChooserModelType from "../../../../typescript/types/app/models/Theme-Chooser-Model-Type";

const projectDetailState = (state: { projectName: string }) => state;

const themeProjectDetailState = (state: { themeCode: string }) => state;

const projectThemesState = (state: { themes: ThemeChooserModelType[] }) =>
  state;

const getProjectDetail = createSelector([projectDetailState], (p) => p);

const getProjectDetailThemes = createSelector(
  [themeProjectDetailState],
  (t) => t
);
/**
 * @function getProjectThemes => Get list of all cached themes list.
 */
const getProjectThemes = createSelector([projectThemesState], (p) => p.themes);

export { getProjectDetail, getProjectDetailThemes, getProjectThemes };
