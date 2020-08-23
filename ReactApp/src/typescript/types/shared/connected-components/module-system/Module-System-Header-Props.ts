import ModuleSystemType from "../../../app/models/Module-System-Type";

/**
 * @type ModuleSystemHeaderProps => Type anotation for header modules of module system container.
 */
type ModuleSystemHeaderProps = {
  modules: ModuleSystemType[];
  projectDetail: {
    name: string;
    themeCode: string;
  };

  projectDetailActions: {
    fetchProjectDetail: Function;
    fetchThemes: Function;
  };
};

export default ModuleSystemHeaderProps;
