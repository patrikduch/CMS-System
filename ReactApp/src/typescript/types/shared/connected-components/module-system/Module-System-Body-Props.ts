import ModuleSystemType from "../../../app/models/Module-System-Type";

/**
 * @type ModuleSystemBodyProps => Type anotation for body modules of module system container.
 */
type ModuleSystemBodyProps = {
  socialIconActions: {
    fetchSocialIcons: () => void;
  };

  projectDetail: {
    name: string;
    themeCode: string;
  };

  modules: ModuleSystemType[];
};

export default ModuleSystemBodyProps;
