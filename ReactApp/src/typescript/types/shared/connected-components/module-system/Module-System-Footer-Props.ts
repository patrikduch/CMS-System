import ModuleSystemType from "../../../app/models/Module-System-Type";

/**
 * @type ModuleSystemFooterProps => Type anotation for footer modules of module system container.
 */
type ModuleSystemFooterProps = {
  modules: ModuleSystemType[];
  projectDetail: {
    name: string;
    themeCode: string;
  };
};

export default ModuleSystemFooterProps;
