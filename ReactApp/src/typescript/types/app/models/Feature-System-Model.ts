/**
 * @type FeatureSystemModel => Model that represents features that can be enabled or disabled. 
 */
type FeatureSystemModel = {
  id: number;
  name: string;
  code: string;
  description?: string;
  isEnabled: boolean;
  isFeature: boolean;

  ModuleFeatureCategory: {
    name: string;
  };
};

export default FeatureSystemModel;
