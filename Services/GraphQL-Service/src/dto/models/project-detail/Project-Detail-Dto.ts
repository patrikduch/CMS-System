import IProjectDetailDto from "../../../typescript/interfaces/dto/project-detail/IProject-Detail-Dto";

/* Project name private field. */
const _projectName = new WeakMap();

/* Theme code private field. */
const _themeCode = new WeakMap();

/* Company name private field.. */
const _companyName = new WeakMap();

/* Domain url private field. */
const _domainUrl = new WeakMap();

/**
 * @class ProjectDetailDto => Data transfer object that represents project details contains (projectName property).
 */
class ProjectDetailDto implements IProjectDetailDto {
  getProjectName: () => string;
  setProjectName: (projectName: string) => void;

  getThemeCode: () => string;
  setThemeCode: (themeCode: string) => void;

  getCompanyName: () => string;
  setCompanyName: (companyName: string) => void;

  getDomainUrl: () => string;
  setDomainUrl: (domainUrl: string) => void;

  constructor() {
    this.getProjectName = () => {
      return _projectName.get(this);
    };

    this.setProjectName = (projectName: string) => {
      _projectName.set(this, projectName);
    };

    this.getThemeCode = () => {
      return _themeCode.get(this);
    };

    this.setThemeCode = (themeCode: string) => {
      _themeCode.set(this, themeCode);
    };

    this.getCompanyName = () => {
      return _companyName.get(this);
    };

    this.setCompanyName = (companyName: string) => {
      _companyName.set(this, companyName);
    };

    this.getDomainUrl = () => {
      return _domainUrl.get(this);
    };

    this.setDomainUrl = (domainUrl: string) => {
      _domainUrl.set(this, domainUrl);
    };
  }
}

export default ProjectDetailDto;
