import _ from "lodash";

import { createSelector } from "reselect";
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";

interface IHeaderState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystemHeader: ModuleSystemType[];
}

/* State contact for body container. */
interface IBodyState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystemBody: ModuleSystemType[];
}

/* State contact for footer container. */
interface IFooterState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystemFooter: ModuleSystemType[];
}

const moduleSystemState = (state: IHeaderState) => state;
const moduleSystemBodyState = (state: IBodyState) => state;
const moduleSystemFooterState = (state: IFooterState) => state;

export const getHeaderModules = createSelector(
  [moduleSystemState],
  t => t.moduleSystemHeader
);

export const getBodyModules = createSelector(
  [moduleSystemBodyState],
  t => t.moduleSystemBody
);

export const getFooterModules = createSelector(
  [moduleSystemFooterState],
  t => t.moduleSystemFooter
);
