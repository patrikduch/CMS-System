/**
 * @type ModuleSystemType => Type anotation for all module objects.
 */
type ModuleSystemType = {
  id: number;
  name: string;
  code: string;
  sectionId: number;
  isChanged: boolean;
  isEnabled: boolean;
  isFeature: boolean;
};

export default ModuleSystemType;
