/**
 * @type ProjectDetailTypeModel => Model type definition that represents main details about project.
 */
type ProjectDetailTypeModel = {
  name: string;
  theme: string /* Theme code */;
  companyName: string;
  themes: [];
  code: string;
  domainUrl: string;
};

export default ProjectDetailTypeModel;
