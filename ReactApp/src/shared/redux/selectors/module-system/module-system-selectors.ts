import { createSelector } from "reselect";

/* Type checking. */
import FeatureSystemModel from "../../../../typescript/types/app/models/Feature-System-Model";

/**
 * @interface IState => State selector`s interface.
 */
interface IState {
  features: FeatureSystemModel[];
}

/**
 * @function featureState => State separation that contains all possible features.
 * @param state
 */
const moduleSystemState = (state: IState) => state;

/**
 * @function getFeatures => Get list of  cached features.
 */
export const getModules = createSelector([moduleSystemState], (f) => f.features);
